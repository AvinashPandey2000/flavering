import Config from 'react-native-config';

const logos = {
      one: require('./logoOne.png'),
      two: require('./logoOne.png'),
      three: require('./logoOne.png'),
}

export const Images = {
      home: require('./home.png'),
      calendar: require('./calendar.png'),
      search: require('./search.png'),
      more: require('./more.png'),
      maillardVilleSplash: require('./maillardVilleSplash.png'),
      veterinary: require('./veterinary.jpg'),
      thirdSplash: require('./thirdSplash.jpg'),
      logoOne: require('./logoOne.png'),
      logoTwo: require('./logoOne.png'),
      logoThree: require('./logoOne.png'),
      logo: logos[Config.APP_FLAVOR] || logos.one,
}
