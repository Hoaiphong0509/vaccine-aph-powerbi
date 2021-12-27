import { useEffect, useState } from 'react'
import { PowerBIEmbed } from 'powerbi-client-react'
import { models } from 'powerbi-client'
import axios from 'axios'

const REPORTID = '1ed173a3-8a10-48be-8357-e7d02dbf4885'

export default function PowerBi() {
  const [token, setToken] = useState()

  useEffect(() => {
    async function fetchdata() {
      try {
        const data = (await axios.get('/api/powerbi')).data
        setToken(data.access_token)
      } catch (error) {}
    }

    fetchdata()
  }, [])

  return (
    <PowerBIEmbed
      embedConfig={{
        type: 'report',
        id: REPORTID,
        embedUrl: `https://app.powerbi.com/reportEmbed?reportId=${REPORTID}`,
        accessToken: token,

        tokenType: models.TokenType.Aad,
        settings: {
          panes: {
            filters: {
              expanded: false,
              visible: false,
            },
          },
        },
      }}
      cssClassName={'Embed-container'}
      getEmbeddedComponent={(embeddedReport) => {
        window.report = embeddedReport
      }}
    />
  )
}
