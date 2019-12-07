const config = {
  dashboard: {
    widgets: {

      schedule: {
        cals: ['https://bloodynipples.com/2019.ics'],
        year: new Date().getFullYear(),
        data: {
          day: []
        }
      },

      weather: {
        api_key: "12345",
        location: "Auckland,NZ",
        units: "metric",
      },

      countdown: {
        event: "Christmas Party!",
        date: new Date(2019, 11, 15),
      },

      money: {
        holdings: 'https://raw.githubusercontent.com/robrohan/react-home-dashboard/master/static/money.json'
      },

      investments: {
        holdings: 'https://raw.githubusercontent.com/robrohan/react-home-dashboard/master/static/investments.json',
        currency: 'NZD'
      },

      soundcloud: {
        playlist: 'https://api.soundcloud.com/playlists/205051568'
      },

      chart: {
        title: 'Suffer Score',
        data_url_y: 'https://raw.githubusercontent.com/robrohan/react-home-dashboard/master/static/chart.json',
        data_url: 'https://bloodynipples.com/score.json'
      }
    }
  }
}

export default config;
