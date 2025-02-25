import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const API_KEY = 'fd9ad7ad95d7588d2476233671b60240';
const token =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZDlhZDdhZDk1ZDc1ODhkMjQ3NjIzMzY3MWI2MDI0MCIsIm5iZiI6MTczMDE5NDQwOS40NTQwMDAyLCJzdWIiOiI2NzIwYWJlOTQ1NDJlMzcxZmUwYjMxNDMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.L_CVcmVcz547lJkhaTj04n7coUTDs2v9L6pe-ENsY0A ';

const sections = [
  {
    id: 1,
    title: 'Releases in the Past Year',
    
  },
  {
    id: 2,
    title: 'Suspenseful TV Shows',
  },
  {
    id: 3,
    title: 'Selected for You Today',
  },
  {
    id: 4,
    title: 'My List',
  },
  {
    id: 5,
    title: 'Continue Watching for Drashti',
  },
  {
    id: 6,
    title: 'New Releases',
  },
  {
    id: 7,
    title: 'Ensemble TV Shows',
  },
  {
    id: 8,
    title: 'Chilly Thrillers',
  },
  {
    id: 9,
    title: 'Only on Netflix',
  },
];

export {width, height, API_KEY, token,sections};
