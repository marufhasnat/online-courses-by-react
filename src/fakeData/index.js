import courses from './courses';

const fakeData = [...courses];

const shuffle = (x) => {
    for (let i = x.length; i; i--) {
        let j = Math.floor(Math.random() * i);
        [x[i - 1], x[j]] = [x[j], x[i - 1]];
    }
}

shuffle(fakeData);

export default fakeData;