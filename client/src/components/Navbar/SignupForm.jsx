// import { useState } from 'react'
// import { Form, Button, Alert } from 'react-bootstrap'

// import { createUser } from '../../utils/API'
// import Auth from '../../utils/auth'

// const SignupForm = () => {
//   // set initial form state
//   const [userFormData, setUserFormData] = useState({
//     username: '',
//     email: '',
//     password: '',
//   })
//   // set state for form validation
//   const [validated] = useState(false)
//   // set state for alert
//   const [showAlert, setShowAlert] = useState(false)

//   const handleInputChange = (event) => {
//     const { name, value } = event.target
//     setUserFormData({ ...userFormData, [name]: value })
//   }

//   const handleFormSubmit = async (event) => {
//     event.preventDefault()

//     // check if form has everything (as per react-bootstrap docs)
//     const form = event.currentTarget
//     if (form.checkValidity() === false) {
//       event.preventDefault()
//       event.stopPropagation()
//     }

//     try {
//       const response = await createUser(userFormData)

//       if (!response.ok) {
//         throw new Error('something went wrong!')
//       }

//       const { token, user } = await response.json()
//       console.log(user)
//       Auth.login(token)
//     } catch (err) {
//       console.error(err)
//       setShowAlert(true)
//     }

//     setUserFormData({
//       username: '',
//       email: '',
//       password: '',
//     })
//   }

//   return (
//     <>
//       {/* This is needed for the validation functionality above */}
//       <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
//         {/* show alert if server response is bad */}
//         <Alert
//           dismissible
//           onClose={() => setShowAlert(false)}
//           show={showAlert}
//           variant="danger"
//         >
//           Something went wrong with your signup!
//         </Alert>

//         <Form.Group className="mb-3">
//           <Form.Label htmlFor="username">Username</Form.Label>
//           <Form.Control
//             type="text"
//             placeholder="Your username"
//             name="username"
//             onChange={handleInputChange}
//             value={userFormData.username}
//             required
//           />
//           <Form.Control.Feedback type="invalid">
//             Username is required!
//           </Form.Control.Feedback>
//         </Form.Group>

//         <Form.Group className="mb-3">
//           <Form.Label htmlFor="email">Email</Form.Label>
//           <Form.Control
//             type="email"
//             placeholder="Your email address"
//             name="email"
//             onChange={handleInputChange}
//             value={userFormData.email}
//             required
//           />
//           <Form.Control.Feedback type="invalid">
//             Email is required!
//           </Form.Control.Feedback>
//         </Form.Group>

//         <Form.Group className="mb-3">
//           <Form.Label htmlFor="password">Password</Form.Label>
//           <Form.Control
//             type="password"
//             placeholder="Your password"
//             name="password"
//             onChange={handleInputChange}
//             value={userFormData.password}
//             required
//           />
//           <Form.Control.Feedback type="invalid">
//             Password is required!
//           </Form.Control.Feedback>
//         </Form.Group>
//         <Button
//           disabled={
//             !(
//               userFormData.username &&
//               userFormData.email &&
//               userFormData.password
//             )
//           }
//           type="submit"
//           variant="success"
//         >
//           Submit
//         </Button>
//       </Form>
//     </>
//   )
// }

// export default SignupForm
import { useState } from 'react'

import { createUser } from '../../utils/API'
import Auth from '../../utils/auth'

const SignupForm = ({ handleModalClose }) => {
  const [userFormData, setUserFormData] = useState({
    username: '',
    email: '',
    password: '',
  })
  const [validated] = useState(false)
  const [showAlert, setShowAlert] = useState(false)

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setUserFormData({ ...userFormData, [name]: value })
  }

  const handleFormSubmit = async (event) => {
    event.preventDefault()

    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }

    try {
      const response = await createUser(userFormData)

      if (!response.ok) {
        throw new Error('something went wrong!')
      }

      const { token, user } = await response.json()
      console.log(user)
      Auth.login(token)
      handleModalClose() // Close the modal after successful signup
    } catch (err) {
      console.error(err)
      setShowAlert(true)
    }

    setUserFormData({
      username: '',
      email: '',
      password: '',
    })
  }

  return (
    <>
      <form noValidate validated={validated} onSubmit={handleFormSubmit}>
        <div className="alert">
          {showAlert && <div>Something went wrong with your signup!</div>}
        </div>

        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            placeholder="Your username"
            name="username"
            onChange={handleInputChange}
            value={userFormData.username}
            required
          />
          <div className="feedback">Username is required!</div>
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="Your email address"
            name="email"
            onChange={handleInputChange}
            value={userFormData.email}
            required
          />
          <div className="feedback">Email is required!</div>
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="Your password"
            name="password"
            onChange={handleInputChange}
            value={userFormData.password}
            required
          />
          <div className="feedback">Password is required!</div>
        </div>
        <button
          disabled={
            !(
              userFormData.username &&
              userFormData.email &&
              userFormData.password
            )
          }
          type="submit"
        >
          Submit
        </button>
      </form>
    </>
  )
}

export default SignupForm
