import React, { useMemo, useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Mail from 'images/mail.svg';
import OpenedIcon from 'images/opened_eye.svg';
import ClosedIcon from 'images/closed_eye.svg';
import Input from 'components/common/Input';
import Button from 'components/common/Button';
import Logo from 'components/common/Logo';
import PasswordWarning from 'components/auth/PasswordWarning';
import EmailWarning from 'components/auth/EmailWarning';
import { useSelector, useDispatch } from 'store';
import { registerUser, setUserEmail } from 'store/module/user';
import { registerAPI } from 'api/auth';
// import { signupAPI } from '../lib/api/auth/signup';
// import { useSelector, useDispatch } from 'react-redux';
// import { userActions } from '../store/user';
// import PasswordWarning from '../components/auths/PasswordWarning';
// import EmailWarning from '../components/auths/EmailWarning';
const PASSWORD_MIN_LENGTH = 8;

const Container = styled.form`
  display: flex;
  justify-content: end;
  width: 100%;
  background-color: #c6c6c6;
  min-height: 100vh;
  font-family: 'Raleway', sans-serif;

  .signup-wrap {
    position: relative;
    width: 50%;
    min-width: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #ffffff;
    .join-us {
      font-size: 40px;
      font-weight: bold;
      margin-bottom: 60px;
    }
  }
  .input-wrapper {
    display: flex;
    position: relative;
    margin-bottom: 16px;
    & .input-image {
      cursor: pointer;
      position: absolute;
      right: 10px;
      top: 12px;
    }
  }
  .sign-up-password-input-wrapper {
    svg {
      cursor: pointer;
    }
  }
  .sign-up-modal-submit-button-wrapper {
    margin-bottom: 16px;
    padding-bottom: 16px;
    border-bottom: 1px solid gray;
  }
  .sign-up-to-login {
    width: 300px;
    display: flex;
    justify-content: space-around;

    a {
      text-decoration: none;
      color: inherit;
      font-weight: bold;
    }
    p {
      font-size: 14px;
    }
  }
`;

const Register = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [validationEmail, setValidationEmail] = useState(true);
  const [password, setPassword] = useState('');
  const [hidePassword, setHidePassword] = useState(true);
  const [validateMode, setValidateMode] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);

  const isPasswordOverMinLength = useMemo(
    () => !!password && password.length >= PASSWORD_MIN_LENGTH,
    [password]
  );
  const isPasswordHasNumberOrSymbol = useMemo(
    () =>
      /[0-9]/g.test(password) &&
      /^.*(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&+=]).*$/g.test(password),
    [password]
  );
  const isEmail = useMemo(
    () =>
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/g.test(
        email
      ),
    [email]
  );
  const onFocusPassword = () => {
    setPasswordFocused(true);
  };

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
    dispatch(setUserEmail(e.target.value));
  };
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const toggleHidePassword = () => {
    setHidePassword(!hidePassword);
  };
  const onSubmitSignUp = async (e) => {
    e.preventDefault();

    // 입력값없을때 submit 방지
    setValidateMode(true);
    if (!email || !password) {
      return undefined;
    }
    // 이메일 형식이 맞는지 체크
    if (!isEmail) {
      setValidationEmail(false);
      return undefined;
    }
    if (!isPasswordOverMinLength || !isPasswordHasNumberOrSymbol) {
      return undefined;
    }
    try {
      const signUpBody = {
        username: email,
        password: password,
      };

      // await registerAPI(signUpBody);
      dispatch(registerUser(signUpBody)).then((response) => {
        console.log(response);
      });
    } catch (e) {
      console.log(e);
    }
  };

  var email11 = useSelector((state) => state.user.userEmail);
  console.log('email11', email11);
  return (
    <Container onSubmit={onSubmitSignUp}>
      <div className="signup-wrap">
        <Logo className="logo" />
        <h1 className="join-us">Join Us</h1>
        <div className="input-wrapper">
          <Input
            placeholder="email address"
            type="email"
            name="email"
            value={email}
            onChange={onChangeEmail}
            validateMode={validateMode}
            useValidation
            isValid={!!email}
            errorMessage="이메일이 필요합니다."
          />
          <img className="input-image" src={Mail} alt={Mail} />
        </div>
        {!validationEmail && (
          <div
            style={{
              width: '300px',
              marginBottom: '10px',
            }}
          >
            <EmailWarning
              isValid={isEmail}
              text="이메일 형식에 맞추어 주세요."
            />
          </div>
        )}
        <div className="input-wrapper sign-up-password-input-wrapper">
          <Input
            placeholder="password"
            type={hidePassword ? 'password' : 'text'}
            icon={
              hidePassword ? (
                <OpenedIcon onClick={toggleHidePassword} />
              ) : (
                <ClosedIcon onClick={toggleHidePassword} />
              )
            }
            value={password}
            onChange={onChangePassword}
            validateMode={validateMode}
            useValidation
            isValid={!!password}
            errorMessage="비밀번호를 입력하세요."
            onFocus={onFocusPassword}
          />
          <img
            onClick={toggleHidePassword}
            className="input-image"
            src={hidePassword ? OpenedIcon : ClosedIcon}
            alt={OpenedIcon}
          />
        </div>
        {passwordFocused && (
          <div style={{ width: '300px', marginBottom: '10px' }}>
            <PasswordWarning
              isValid={isPasswordOverMinLength}
              text="최소 8자를 입력하세요."
            />
            <PasswordWarning
              isValid={isPasswordHasNumberOrSymbol}
              text="숫자, 소문자, 대문자, 특수기호를 포함하세요."
            />
          </div>
        )}
        <div className="sign-up-modal-submit-button-wrapper">
          <Button type="submit">가입하기</Button>
        </div>
        <div className="sign-up-to-login">
          <p>이미 Make Your Page 계정이 있나요?</p>
          <Link to="/login">
            <p>로그인</p>
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default Register;
