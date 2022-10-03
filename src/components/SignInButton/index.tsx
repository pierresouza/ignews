import style from './style.module.scss';
import { FaGithub } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';

export function SignInButton() {
  const isUserLoggedIn = true;

  return isUserLoggedIn ? (
    <>
      <button type="button" className={style.SignInButton}>
        <FaGithub color="#04d361" />
        Pierre Souza
        <FiX color="#717380" className={style.closeIcon} />
      </button>
    </>
  ) : (
    <>
      <button type="button" className={style.SignInButton}>
        <FaGithub color="#eba417" />
        Sing in with Github
      </button>
    </>
  );
}
