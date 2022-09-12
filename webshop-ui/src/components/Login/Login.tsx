import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
// import { performLogin } from '../../helper/services';
import FormInput from '../../common/FormInput/FormInput';
import FormInfoButton from '../../common/FormInfoButton/FormInfoButton';
import { BrowserStorage } from '../../helper/types';
import { useAppDispatch } from '../../hooks';
import { performLogin } from '../../store/user/thunk';

function Login():JSX.Element {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailIsValid, setEmailIsValid] = useState(true);
  const [passwordIsValid, setPasswordIsValid] = useState(true);
  const [keepLoggedIn, setKeepLoggedIn] = useState(false);
  const [rotateForm, setRotateForm] = useState(false);
  const [forgotFieldEmail, setForgotFieldEmail] = useState('');
  const [showInfo, setShowInfo] = useState(false);

  useEffect(() => {
    if (window.localStorage.getItem(BrowserStorage.TOKEN)
        || window.sessionStorage.getItem(BrowserStorage.TOKEN)) {
      navigate('/');
    }
  });

  useEffect(() => {
    /* validation and set css class if error occure */
    if (email) {
      setEmailIsValid(true);
    } else {
      setEmailIsValid(false);
    }

    if (password) {
      setPasswordIsValid(true);
    } else {
      setPasswordIsValid(false);
    }
  }, [email, password]);

  const handleSubmit = async ():Promise<void> => {
    const user = {
      email,
      password,
    };
    if (await dispatch(performLogin(user, keepLoggedIn))) {
      navigate('/shop');
    }
  };

  const requestNewPassword = ():void => {
    console.log('gimmeee new password');
  };

  const handleEmailOnChange = (
    event:React.ChangeEvent<HTMLInputElement>,
  ):void => {
    setEmail(event.target.value);
  };

  const handlePasswordOnChange = (
    event:React.ChangeEvent<HTMLInputElement>,
  ):void => {
    setPassword(event.target.value);
  };

  const handleKeepLoggedIn = (
    event:React.ChangeEvent<HTMLInputElement>,
  ):void => {
    setKeepLoggedIn(event.target.checked);
  };

  const handleForgotEmailOnChange = (
    event:React.ChangeEvent<HTMLInputElement>,
  ):void => {
    setForgotFieldEmail(event.target.value);
  };

  return (
    <div className="login-wrapper">
      <div className={`login-flip-wrapper ${rotateForm ? 'rotate-form' : ''}`}>
        <form className={`login-form ${rotateForm ? 'push-back-fields' : ''}`}>
          <h1>Login</h1>
          <FormInput
            wrapperClass="input-wrapper"
            inputClass={emailIsValid ? 'log-input' : 'log-input error'}
            inputTitle="Email"
            inputType="email"
            handleOnChange={handleEmailOnChange}
          />
          <FormInput
            wrapperClass="input-wrapper"
            inputClass={passwordIsValid ? 'log-input' : 'log-input error'}
            inputTitle="Password"
            inputType="password"
            handleOnChange={handlePasswordOnChange}
          />
          <label htmlFor="keep-logged-in" className="keep-logged-in-label">
            Keep me logged in
            <input
              id="keep-logged-in"
              type="checkbox"
              onChange={handleKeepLoggedIn}
            />
          </label>
          <button type="button" onClick={handleSubmit}>Login</button>
          <small>
            You have not account?
            <Link to="/registration">Registrate here.</Link>
          </small>
          <small>
            Forgot your password?
            <button
              type="button"
              className="rotate-button"
              onClick={() => setRotateForm(true)}
            >
              Click here!
            </button>
          </small>
          <FormInfoButton showInfo={() => { setShowInfo((prev) => !prev); }} />
        </form>
        <form className="forgot-form">
          <h1>Request new password</h1>
          <FormInput
            wrapperClass="input-wrapper"
            inputClass={emailIsValid ? 'log-input' : 'log-input error'}
            inputTitle="Email"
            inputType="email"
            handleOnChange={handleForgotEmailOnChange}
          />
          <button
            type="button"
            onClick={requestNewPassword}
          >
            Change password
          </button>
          <small>
            Changed your mind?
            <button
              type="button"
              className="rotate-button"
              onClick={() => setRotateForm(false)}
            >
              Back to login
            </button>
          </small>
          <FormInfoButton showInfo={() => { setShowInfo((prev) => !prev); }} />
        </form>
        {showInfo && (
          <>
            <aside className="login-info">
              <ul>
                <li>
                  Username must be between 7 and 29 characters.
                  Only uppercase, lowercase and number allowed.
                </li>
                <li>
                  Valid email format required.
                </li>
                <li>
                  Password must be at least 8 character.
                  Must contain at least two uppercase, two letter
                  and two special characters.
                </li>
                <li>
                  Two passwords must be same.
                </li>
              </ul>
            </aside>
            <aside className="forgot-info">
              <ul>
                <li>
                  Valid email format required.
                </li>
              </ul>
            </aside>
          </>
        )}
      </div>
    </div>
  );
}

export default Login;
