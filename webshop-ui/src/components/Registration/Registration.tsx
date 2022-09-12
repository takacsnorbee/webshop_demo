import './Registration.css';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
// import { performRegistration } from '../../helper/services';
import FormInput from '../../common/FormInput/FormInput';
import FormInfoButton from '../../common/FormInfoButton/FormInfoButton';
import { performRegistration } from '../../store/user/thunk';
import { useAppDispatch } from '../../hooks';

function Registration():JSX.Element {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const userNameRegex = /^[A-Za-z][A-Za-z0-9_]{7,29}$/;
  const passwordRegex = new RegExp([
    '^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)',
    '(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$',
  ].join(''), 'g');
  const emailRegex = new RegExp(['',
    '(?:[a-z0-9!#$%&\'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&\'*+/=?^_`{|}~-]+)',
    '*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\',
    '[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]',
    '*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|',
    '\\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\\.)',
    '{3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]',
    '*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]',
    '|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\\])\\w+'].join(''), 'g');
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordAgain, setPasswordAgain] = useState('');
  const [userNameIsValid, setUserNameIsValid] = useState(true);
  const [emailIsValid, setEmailIsValid] = useState(true);
  const [passwordIsValid, setPasswordIsValid] = useState(true);
  const [passwordAgainIsValid, setPasswordAgainIsValid] = useState(true);
  const [showInfo, setShowInfo] = useState(false);

  useEffect(() => {
    if (window.localStorage.getItem('token-camp-king')
        || window.sessionStorage.getItem('token-camp-king')) {
      navigate('/');
    }
  });

  useEffect(() => {
    /* validation and set css class if error occure */
    if (userName.length > 0 && userNameRegex.test(userName)) {
      setUserNameIsValid(true);
    } else {
      setUserNameIsValid(false);
    }

    if (email.length > 0 && emailRegex.test(email)) {
      setEmailIsValid(true);
    } else {
      setEmailIsValid(false);
    }

    if (password.length > 0 && passwordRegex.test(password)) {
      if (password === passwordAgain) {
        setPasswordIsValid(true);
        setPasswordAgainIsValid(true);
      } else {
        setPasswordIsValid(false);
        setPasswordAgainIsValid(false);
      }
    } else {
      setPasswordIsValid(false);
    }
  }, [userName, email, password, passwordAgain]);

  const handleSubmit = async ():Promise<void> => {
    if (userNameIsValid && emailIsValid && passwordIsValid) {
      const newUser = {
        username: userName,
        password,
        email,
        isAdmin: false,
      };
      if (await dispatch(performRegistration(newUser))) {
        navigate('/');
      }
    } else {
      console.log('wrong input data'); // todo -> notify
    }
  };

  const handleUsernameOnChange = (
    event:React.ChangeEvent<HTMLInputElement>,
  ):void => {
    setUserName(event.target.value);
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

  const handlePasswordAgainOnChange = (
    event:React.ChangeEvent<HTMLInputElement>,
  ):void => {
    setPasswordAgain(event.target.value);
  };

  return (
    <div className="registration-wrapper">
      <div className="registration-form-wrapper">
        <form className="registration-form">
          <h1>Registration</h1>
          <FormInput
            wrapperClass="input-wrapper"
            inputClass={userNameIsValid ? 'reg-input' : 'reg-input error'}
            inputTitle="Username"
            inputType="text"
            handleOnChange={handleUsernameOnChange}
          />
          <FormInput
            wrapperClass="input-wrapper"
            inputClass={emailIsValid ? 'reg-input' : 'reg-input error'}
            inputTitle="Email"
            inputType="email"
            handleOnChange={handleEmailOnChange}
          />
          <FormInput
            wrapperClass="input-wrapper"
            inputClass={passwordIsValid ? 'reg-input' : 'reg-input error'}
            inputTitle="Password"
            inputType="password"
            handleOnChange={handlePasswordOnChange}
          />
          <FormInput
            wrapperClass="input-wrapper"
            inputClass={passwordAgainIsValid ? 'reg-input' : 'reg-input error'}
            inputTitle="Password again"
            inputType="password"
            handleOnChange={handlePasswordAgainOnChange}
          />
          <button type="button" onClick={handleSubmit}>Registration</button>
          <small>
            Do you have profile?
            <Link to="/login">Login here.</Link>
          </small>
          <FormInfoButton showInfo={() => { setShowInfo((prev) => !prev); }} />
        </form>
        {showInfo && (
          <aside className="reg-info slide-in">
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
        )}
      </div>
    </div>
  );
}

export default Registration;
