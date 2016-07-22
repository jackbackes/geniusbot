'use strict';

const ImgRoute = (mood) => `./images/geniusbot/${mood}.png`
const AvatarRoute = (mood) => `./images/geniusbot/avatar-${mood}.png`

const moods = ['angry', 'contented', 'crazy', 'frame', 'geek', 'happy', 'helpful', 'mail', 'news', 'wheel'];

const avatarMoods = ['laugh', 'surprised', 'wink', 'worry'].map(AvatarRoute);

let GeniusBotImages = {
  avatar: {}
};

moods.forEach( mood =>{
  GeniusBotImages[mood] = ImgRoute(mood)}
)

avatarMoods.forEach( mood =>{
  GeniusBotImages.avatar[mood] = AvatarRoute(mood)}
)

export {GeniusBotImages as GeniusBotImages};
