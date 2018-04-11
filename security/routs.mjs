import _ from 'lodash';

const publicRouts = [
    '/users/signin',
    '/users/signup'
];

export const checkPublicRout = (path) => {
    return _.indexOf(publicRouts, path) + 1;
}