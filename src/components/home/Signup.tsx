import Image from "next/image";
import accountOpen from "../../../public/img/account_open.png";
import styled from "styled-components";

const Section = styled.section`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  & .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.75rem;
    & h2 {
      font-size: 2rem;
      font-weight: 400;
    }
    & p {
      font-size: 1.25rem;
    }
  }
  & .form-container {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    @media screen and (max-width: 50rem) {
      flex-direction: column;
    }
    & img {
      width: auto;
      height: 50vh;
      object-fit: cover;
      object-position: center;
    }
    & form {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      gap: 1rem;
      & .form-top {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        gap: 0.5rem;
        & h2 {
          font-size: 2rem;
          font-weight: 500;
        }
        & p {
          font-size: 1rem;
          font-weight: 400;
          color: rgb(var(--dark-color), 0.5);
        }
      }
      & table {
        border-collapse: collapse;
        border-radius: 0.25rem;
        width: 100%;
        & td {
          padding: 0.75rem;
          font-size: 1.25rem;
          & input {
            color: rgb(var(--dark-color));
            width: 100%;
            border: none;
            outline: none;
            font-size: 1.25rem;
            &::placeholder {
              font-size: 1.2rem;
              color: rgb(var(--dark-color), 0.5);
            }
            &::-webkit-inner-spin-button,
            &::-webkit-outer-spin-button {
              -webkit-appearance: none;
            }
          }
        }
      }
      td {
        border: 1px solid rgb(var(--dark-color), 0.1);
      }
      & .small {
        margin-top: -0.5rem;
        font-size: 0.8rem;
        font-weight: 400;
        color: rgb(var(--dark-color), 0.5);
      }
      & button {
        font-size: 1rem;
        font-weight: 500;
        color: rgb(var(--light-color));
        padding: 0.75rem 1.25rem;
        border-radius: 5rem;
        background-color: rgb(var(--primary-color));
        border: 1px solid rgb(var(--light-color), 0.1);
        box-shadow: 0 0.25rem 0.5rem rgb(var(--primary-color), 0.25),
          0 0.35rem 1rem rgb(var(--primary-color), 0.1);
        width: fit-content;
        cursor: pointer;
        overflow: hidden;
        transition: 0.5s;
        animation: animate-size 0.75s infinite ease alternate;
        @keyframes animate-size {
          0% {
            transform: scale(1);
          }
          100% {
            transform: scale(1.05);
          }
        }
        &:hover {
          border-color: transparent;
          box-shadow: 0 0 0.75rem rgb(var(--primary-color), 0.75);
          animation-play-state: paused;
        }
      }
    }
  }
`;

const Signup = () => {
  return (
    <Section>
      <div className="content">
        <h2>Join 1+ Crore investors & traders</h2>
        <p>
          Open a trading and Demat account online and start investing for free
        </p>
      </div>
      <div className="form-container">
        <Image src={accountOpen} alt="Tojo, no. 1 stock broker in India" />
        <form>
          <div className="form-top">
            <h2>Signup now</h2>
            <p>Or track your existing application</p>
          </div>
          <table>
            <tbody>
              <tr>
                <td>+91</td>
                <td>
                  <input
                    type="number"
                    placeholder="Your 10 digit mobile number"
                  />
                </td>
              </tr>
            </tbody>
          </table>
          <p className="small">You will receive an OTP on your number</p>
          <button>Continue</button>
        </form>
      </div>
    </Section>
  );
};

export default Signup;
