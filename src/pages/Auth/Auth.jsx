import React, { useState } from 'react';
import { auth, firestore } from '../../firebase/config';
import CustomButton from '../../componentz/CustomButton/CustomButton';
import CustomPopUp from '../../componentz/CustomPopUp/CustomPopUp';
import CustomInput from '../../componentz/CustomInput/CustomInput';
import { setAdmin } from '../../redux/admin/actions';
import Spacing from '../../componentz/Spacing/Spacing';
import loader from '../../assetz/loader.gif';

import './styles.scss';
import { colors } from '../../constants/Colors';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';

const Auth = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsloading] = useState(false);
  const [isShowPassword, setIsShowPassword] = useState(false);
  const onToggleShowPassword = () => setIsShowPassword(!isShowPassword);
  const onSubmit = async (e) => {
    e.preventDefault();
    setIsloading(true);
    try {
      const response = await auth.signInWithEmailAndPassword(email, password);
      if (response.user) {
        const userRef = firestore.doc(`auth/${response.uid}`);
        userRef.onSnapshot((snapShot) => {
          dispatch(
            setAdmin({
              id: snapShot.id,
              ...snapShot.data(),
            })
          );
        });
      }
      setEmail('');
      setPassword('');
      setIsloading(false);
      history.push('/oak-admin');
    } catch (error) {
      error.code === 'auth/wrong-password'
        ? setErrorMessage(
            'The password is invalid or the user does not have a password.'
          )
        : error.code === 'auth/user-not-found'
        ? setErrorMessage(
            'There is no user record corresponding to this identifier.'
          )
        : setErrorMessage("There's been an error, please consult the Devs");
      setIsloading(false);
    }
  };
  return (
    <div className='admin-auth'>
      <div>
        <h3 className='title'>Admin Login</h3>
        <form onSubmit={onSubmit} className='form-container'>
          {errorMessage !== '' ? (
            <CustomPopUp
              message={`${errorMessage}`}
              type={'error'}
              customStyles={{ backgroundColor: colors.danger }}
              customTextStyles={{ color: colors.white }}
            />
          ) : null}
          <Spacing height='2em' />
          <CustomInput
            label='Email'
            value={email}
            type={'email'}
            onChange={({ target }) => {
              setErrorMessage('');
              setEmail(target.value);
            }}
          />
          <Spacing height='2em' />
          <CustomInput
            label='Password'
            value={password}
            type={'password'}
            onChange={({ target }) => {
              setErrorMessage('');
              setPassword(target.value);
            }}
          />
          <Spacing height='3em' />
          {isLoading ? (
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <img src={loader} alt='loader' className='auth-loading' />
            </div>
          ) : (
            <CustomButton
              label='Login'
              onClick={onSubmit}
              className='login-btn'
            />
          )}
        </form>
      </div>
    </div>
  );
};
export default Auth;
