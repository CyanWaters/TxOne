import React, { useState } from "react"
import styled from "styled-components"
import axios from "axios"

import LoadingIcon from "../../../icons/loading.svg"
import ClearIcon from "../../../icons/clear-day.svg"
import CloudIcon from "../../../icons/cloudy.svg"
import RainIcon from "../../../icons/rain.svg"
import NAIcon from "../../../icons/not-available.svg"

import { DEFAULT_API_KEY, ICON_WIDTH } from "./constants"
import Message, { MessageType } from "../../Message"
import { WeatherStyle } from "./interface"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 0 0 20px;
  & div.weather {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`
const Description = styled.div`
  margin: 20px 0 0 20px;
  flex-grow: 1;
  & :first-child {
    font-size: 36px;
    font-weigth: bold;
  }
  & :nth-child(2) {
    color: lightslategray;
  }
`

const Label = styled.label`
  margin-left: 5px;
`

const Input = styled.input`
  margin-left: 5px;
  margin-bottom: 5px;
  width: 150px;
`
const Button = styled.button`
  margin-left: 5px;
`

interface FormData {
  city?: string
  country?: string
  appId?: string
}

interface WeatherInfomation {
  desc?: string
  humidity?: number | string
  tempMax?: number | string
  tempMin?: number | string
  weather?: string
}

const Weather = () => {
  const [formData, setFormData] = useState<FormData>()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string>()
  const [info, setInfo] = useState<WeatherInfomation>({} as WeatherInfomation)

  const handleOnChange =
    (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormData({
        ...formData,
        [field]: e.target.value,
      })
    }

  const handleSearch = async () => {
    if (!formData) {
      return
    }
    const { city, country, appId = DEFAULT_API_KEY } = formData
    setLoading(true)
    setError(undefined)
    const URL = `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=metric&APPID=${appId}`
    try {
      const {
        data: {
          weather,
          main: { temp_max, temp_min, humidity },
        },
      } = await axios.get(URL)
      setInfo({
        weather: weather?.[0]?.main,
        desc: weather?.[0]?.description,
        tempMax: temp_max,
        tempMin: temp_min,
        humidity,
      })
    } catch (error: any) {
      setInfo({})
      if (error.response) {
        const { message } = error.response.data
        setError(message)
      } else {
        setError(error)
      }
    }
    setLoading(false)
  }

  const handleWeatherIcon = (weather?: string) => {
    switch (weather) {
      case WeatherStyle.Rain:
        return <img src={RainIcon} width={ICON_WIDTH} alt="icon" />
      case WeatherStyle.Clouds:
        return <img src={CloudIcon} width={ICON_WIDTH} alt="icon" />
      case WeatherStyle.Clear:
        return <img src={ClearIcon} width={ICON_WIDTH} alt="icon" />
      default:
        return <img src={NAIcon} width={ICON_WIDTH} alt="icon" />
    }
  }

  const { weather, desc, tempMax, tempMin, humidity } = info
  return (
    <Container>
      {!!error && <Message type={MessageType.Error} description={error} />}
      <div>
        <Label>
          City:
          <Input
            type="text"
            value={formData?.city}
            onChange={handleOnChange("city")}
          />
        </Label>
        <Label>
          Country:
          <Input
            type="text"
            value={formData?.country}
            onChange={handleOnChange("country")}
          />
        </Label>
        <Label>
          API Key:
          <Input
            type="text"
            value={formData?.appId}
            onChange={handleOnChange("appId")}
          />
        </Label>
        <Button
          onClick={handleSearch}
          disabled={!formData?.city || !formData?.country}
        >
          Search
        </Button>
      </div>
      <div>
        {loading ? (
          <img src={LoadingIcon} alt="icon" />
        ) : (
          <>
            <div className="weather">
              {handleWeatherIcon(weather?.toLowerCase())}
              <Description>
                <div>{weather}</div>
                <div>{desc}</div>
              </Description>
            </div>
            {tempMin && tempMax && (
              <div>
                Temperature: {tempMin}&#176;C~{tempMax}&#176;C
              </div>
            )}
            {humidity && <div>Humidity: {humidity}%</div>}
          </>
        )}
      </div>
    </Container>
  )
}

export default Weather
