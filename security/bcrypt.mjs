import bcrypt from 'bcryptjs';

const salt = bcrypt.genSaltSync(10);

export function passwordToSave(passwordFromUser){
    return bcrypt.hashSync(passwordFromUser, salt);
};

export function checkPassword(currentPassword, hash){
    return bcrypt.compareSync(currentPassword, hash);
};