import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.modules.css'
import SignUpForm from './SignupForm'
import LoginForm from './LoginForm'
import Auth from '../../utils/auth'

const Navbar = () => {
  const [showModal, setShowModal] = useState(false)
  const [activeTab, setActiveTab] = useState('login') // Default to 'login'
  const [largeScreen, setLargeScreen] = useState(window.innerWidth > 800)
  const [showMenu, setShowMenu] = useState(false)

  const handleTabSelect = (selectedTab) => {
    setActiveTab(selectedTab)
  }

  const handleModalOpen = () => {
    setShowModal(true)
    setActiveTab('login') // Set the default tab to 'login'
  }

  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }

  useEffect(() => {
    const handleResize = () => {
      setLargeScreen(window.innerWidth > 1000)
    }

    // Initial check on component mount
    handleResize()

    // Listen for window resize events
    window.addEventListener('resize', handleResize)

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <>
      <div className="navbar">
        <div className="container">
          <Link to="/" className="brand">
            Dill 'n Dink Social
          </Link>
          {largeScreen ? (
            <div className={`navbar-links ${showMenu ? 'active' : ''}`}>
              <Link to="/">Search For Events</Link>
              <Link to="/groups">See Your Groups</Link>
              {Auth.loggedIn() ? (
                <>
                  <div onClick={Auth.logout}>Logout</div>
                </>
              ) : (
                <div onClick={handleModalOpen}>Login/Sign Up</div>
              )}
            </div>
          ) : (
            <div
              // className={`navbar-toggle ${showMenu ? 'active' : ''}`}
              onClick={toggleMenu}
            >
              ☰
            </div>
          )}
          {showMenu && (
            <div className="navDropDown">
              <Link to="/events">Find Events</Link>
              <Link to="/dashboard">Dashboard</Link>
              <Link to="/groups">My Groups</Link>
              {Auth.loggedIn() ? (
                <>
                  <div onClick={Auth.logout}>Logout</div>
                </>
              ) : (
                <div onClick={handleModalOpen}>Login/Sign Up</div>
              )}
            </div>
          )}
        </div>
      </div>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <div className="modal-header">
              <div className="tab-container">
                <Link
                  className={`tab ${activeTab === 'login' ? 'active' : ''}`}
                  onClick={() => handleTabSelect('login')}
                >
                  Login
                </Link>
                <Link
                  className={`tab ${activeTab === 'signup' ? 'active' : ''}`}
                  onClick={() => handleTabSelect('signup')}
                >
                  Sign Up
                </Link>
              </div>
              <div className="close" onClick={() => setShowModal(false)}>
                &times;
              </div>
            </div>
            <div className="modal-body">
              {activeTab === 'login' && (
                <LoginForm handleModalClose={() => setShowModal(false)} />
              )}
              {activeTab === 'signup' && (
                <SignUpForm handleModalClose={() => setShowModal(false)} />
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Navbar

// import { useState } from 'react'
// import { Link } from 'react-router-dom'
// import './Navbar.modules.css'
// import SignUpForm from './SignupForm'
// import LoginForm from './LoginForm'
// import Auth from '../../utils/auth'

// const AppNavbar = () => {
//   // set modal display state
//   const [showModal, setShowModal] = useState(false)
//   const [activeTab, setActiveTab] = useState('login') // Default to 'login'

//   const handleTabSelect = (selectedTab) => {
//     setActiveTab(selectedTab)
//   }

//   const handleModalOpen = () => {
//     setShowModal(true)
//     setActiveTab('login') // Set the default tab to 'login'
//   }

//   return (
//     <>
//       <div className="navbar">
//         <div className="container">
//           <Link to="/" className="brand">
//             Dill 'n Dink Social
//           </Link>
//           <div className="navbar-toggle" onClick={handleModalOpen}>
//             ☰
//           </div>
//           <div className={`navbar-links ${showModal ? 'active' : ''}`}>
//             <Link to="/">Search For Events</Link>
//             {Auth.loggedIn() ? (
//               <>
//                 <Link to="/groups">See Your Groups</Link>
//                 <div onClick={Auth.logout}>Logout</div>
//               </>
//             ) : (
//               <div onClick={handleModalOpen}>Login/Sign Up</div>
//             )}
//           </div>
//         </div>
//       </div>

//       {showModal && (
//         <div className="modal">
//           <div className="modal-content">
//             <div className="modal-header">
//               <div className="tab-container">
//                 <Link
//                   className={`tab ${activeTab === 'login' ? 'active' : ''}`}
//                   onClick={() => handleTabSelect('login')}
//                 >
//                   Login
//                 </Link>
//                 <Link
//                   className={`tab ${activeTab === 'signup' ? 'active' : ''}`}
//                   onClick={() => handleTabSelect('signup')}
//                 >
//                   Sign Up
//                 </Link>
//               </div>
//               <div className="close" onClick={() => setShowModal(false)}>
//                 &times;
//               </div>
//             </div>
//             <div className="modal-body">
//               {activeTab === 'login' && (
//                 <LoginForm handleModalClose={() => setShowModal(false)} />
//               )}
//               {activeTab === 'signup' && (
//                 <SignUpForm handleModalClose={() => setShowModal(false)} />
//               )}
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   )
// }

// export default AppNavbar
