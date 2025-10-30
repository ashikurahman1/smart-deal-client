import { Eye, EyeOff } from 'lucide-react';
import React, { use, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../../context/AuthContext';
import toast from 'react-hot-toast';
import Swal from 'sweetalert2';
import { auth } from '../../firebase/firebase.config';
const Login = () => {
  const emailRef = useRef();
  const [showPassword, setShowPassword] = useState(false);
  const { userLoginwithEmail, googleLogin, resetPassword } = use(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const handleLoginWithEmail = async e => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
    const remember = e.target.remember.checked;
    userLoginwithEmail(email, password, remember)
      .then(result => {
        const user = result.user;
        if (user.emailVerified) {
          toast.success('Login successful!');
          navigate(`${location.state ? location.state : '/'}`);
        } else {
          toast.error('Please verify your email before logging in.');
          auth.signOut();
        }
      })
      .catch(err => {
        console.log(err.message);
        toast.error('Invalid email or password');
      });
  };

  const handleLoginWithGoogle = () => {
    googleLogin()
      .then(() => {
        toast.success('Registration Success');
        navigate(`${location.state ? location.state : '/'}`);
      })
      .catch(err => console.error(err.message));
  };

  const handleReset = e => {
    e.preventDefault();

    const email = emailRef.current?.value;
    if (!email) {
      toast.error('Please enter your email first.');
      return;
    }
    resetPassword(email)
      .then(() => {
        Swal.fire({
          title: 'Check your email for reset link.',
          icon: 'success',
          draggable: true,
        });
      })
      .catch(err => {
        console.error(err.message);
      });
  };
  return (
    <div className="py-8 lg:py-15 px-4">
      <div className="bg-base-100 p-4 lg:p-10 py-18 rounded-md shadow-md max-w-xl mx-auto">
        <div className="space-y-5">
          <div className="text-center">
            <h2 className="text-3xl font-semibold mb-4 text-[#001931]">
              Login
            </h2>
            <p>
              Don't have an account?{' '}
              <Link to="/auth/register" className="gradient-text">
                Register Now
              </Link>
            </p>
          </div>

          <form onSubmit={handleLoginWithEmail} className="space-y-4">
            <div>
              <label>Email</label>
              <input
                ref={emailRef}
                name="email"
                type="email"
                placeholder="smsowkothasan@gmail.com"
                className="input w-full mt-2"
              />
            </div>
            <div className="relative">
              <label>Password</label>
              <input
                name="password"
                type={showPassword ? 'text' : 'password'}
                placeholder="*************"
                className="input w-full mt-2"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute top-10 right-5 z-10"
              >
                {showPassword ? <EyeOff /> : <Eye />}
              </button>
            </div>
            <div className="flex justify-between items-center">
              <label>
                <input type="checkbox" name="remember" /> Remember Me
              </label>
              <button
                onClick={handleReset}
                type="button"
                className="cursor-pointer hover:underline"
              >
                Forgot password?
              </button>
            </div>
            <button className="btn w-full gradient-bg text-base-100">
              Sign In
            </button>
          </form>
          <div className="divider">OR</div>

          {/* Google */}
          <button
            onClick={handleLoginWithGoogle}
            className="btn bg-white text-black border-[#e5e5e5] w-full"
          >
            <svg
              aria-label="Google logo"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <g>
                <path d="m0 0H512V512H0" fill="#fff"></path>
                <path
                  fill="#34a853"
                  d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                ></path>
                <path
                  fill="#4285f4"
                  d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                ></path>
                <path
                  fill="#fbbc02"
                  d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                ></path>
                <path
                  fill="#ea4335"
                  d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                ></path>
              </g>
            </svg>
            Login with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
