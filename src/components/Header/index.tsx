import HeaderImage from './pageHeader.png';

const Header = () => {
    return (
        <img src={HeaderImage} alt="Background" style={{ width: '100%', height: '75%', position: 'absolute', top: 0, left: 0, zIndex: -1 }} />
    );
}
export default Header;