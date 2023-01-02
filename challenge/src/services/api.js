import axios from 'axios';

const url =
  'https://api.beta.unycos.com/u/courses/spotlights/natacion?x-mejor-key=unycos';

export const GetInfo = async () => {
  try {
    const res = await axios(url);
    return res.data.spotlights;
  } catch (err) {
    console.log(err);
  }
};
