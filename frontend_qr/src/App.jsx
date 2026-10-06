import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Login() {

  const navigate = useNavigate()

  const [form, setForm] = useState({
    email: "",
    password: ""
  })

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    console.log(form)

    // Aquí irá conexión al backend
    // axios.post(...)

    navigate("/dashboard")
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">

        <h1 className="text-3xl font-bold text-center mb-6 text-blue-600">
          Pase de Lista QR
        </h1>

        <form onSubmit={handleSubmit}>

          <div className="mb-4">
            <label className="block mb-2 text-gray-700">
              Correo
            </label>

            <input
              type="email"
              name="email"
              placeholder="correo@ejemplo.com"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-6">
            <label className="block mb-2 text-gray-700">
              Contraseña
            </label>

            <input
              type="password"
              name="password"
              placeholder="********"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={form.password}
              onChange={handleChange}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg transition"
          >
            Iniciar Sesión
          </button>

        </form>

      </div>

    </div>
  )
}

export default Login