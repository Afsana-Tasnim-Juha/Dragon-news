import logo from '../../../assets/logo.png';
import moment from 'moment';

const Header = () => {
    return (
        <div className='text-center'>
            <img className='mx-auto mt-4' src={logo} alt="" />
            <p className='font-'>Journalism Without Fear or Favour</p>
            <p className='text-2xl'>{moment().format("dddd, MMMM D, YYYY")}</p>
        </div>
    );
};

export default Header;