import { Eye, EyeOff, LucideEye } from 'lucide-react';
import React, { use, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../../context/AuthContext';
import toast from 'react-hot-toast';
import Swal from 'sweetalert2';

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);

  const { createUser, updateUser, setUser, googleLogin, verifyEmail } =
    use(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();

  const handleRegister = e => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const photoURL = e.target.photoURL.value;
    const password = e.target.password.value;
    // console.log({ name, photoURL, password });
    createUser(email, password)
      .then(result => {
        const user = result.user;
        updateUser({ displayName: name, photoURL: photoURL })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photoURL });
            verifyEmail()
              .then(() => {
                Swal.fire({
                  title: 'Verification email sent! Please check your inbox.',
                  icon: 'success',
                  draggable: true,
                });
                navigate('/auth/login');
              })
              .catch(err => {
                console.error('Verification error:', err.message);
                toast.error('Failed to send verification email.');
              });
          })
          .catch(err => {
            console.error('Profile update error:', err.message);
            toast.error('Failed to update profile.');
          });
      })
      .catch(err => {
        console.error('Registration error:', err.message);
        toast.error(err.message);
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
  // if (loading) return <p>Loading...</p>;
  return (
    <div className="py-8 lg:py-15 px-4">
      <div className="bg-base-100 p-4 lg:p-8 py-15 rounded-md shadow-md max-w-xl mx-auto">
        <div className="space-y-5">
          <div className="text-center">
            <h2 className="text-3xl font-semibold mb-4 text-[#001931]">
              Register Now!
            </h2>
            <p>
              Already have an account?{' '}
              <Link to="/auth/login" className="gradient-text">
                Login Now
              </Link>
            </p>
          </div>

          <form onSubmit={handleRegister} className="space-y-4">
            <div>
              <label>Name</label>
              <input
                name="name"
                type="text"
                placeholder="Mariam Swarna"
                className="input w-full mt-2"
              />
            </div>
            <div>
              <label>Email</label>
              <input
                name="email"
                type="email"
                placeholder="smsowkothasan@gmail.com"
                className="input w-full mt-2"
              />
            </div>
            <div>
              <label>Image-URL</label>
              <input
                name="photoURL"
                type="url"
                placeholder="https://img.thumbnail.jpg"
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
            <button className="btn w-full gradient-bg text-base-100">
              Register
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
            Sign Up With Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
