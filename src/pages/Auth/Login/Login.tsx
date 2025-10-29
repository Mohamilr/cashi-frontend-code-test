import { useState } from 'react'
import Input from 'components/Input/Input'
import Button from 'components/Button/Button'
import { useFormik } from 'formik'
import { Icon } from '@iconify-icon/react'
import { loginSchema } from 'validations/auth'
import { useLogin } from 'apiClient/auth/auth.mutation'
import router from 'routes'
import { toast } from 'react-hot-toast'

const Login = () => {
  const [showPassword, toggleShowPassword] = useState(false)

  const login = useLogin()
  const handleShowPassword = () => {
    toggleShowPassword(!showPassword)
  }

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: loginSchema,
    onSubmit: async (values) => {
      const data = await login.mutateAsync(values)

      if (data) {
        toast.success('Login successful')
        router.navigate('/')
      }
    },
  })

  return (
    <main>
      <section className="h-dvh flex flex-col gap-10 items-center justify-center">
        <img src="/applogo.png" alt="logo" className="h-20 w-20 rounded-sm" />
        <div className="flex flex-col gap-5 w-[90%] md:w-[70%] lg:w-[400px]">
          <h2 className="text-[38px] font-medium">Welcome back</h2>
          <form className="flex flex-col gap-4" onSubmit={formik.handleSubmit}>
            <Input
              label="Email"
              name="email"
              onChange={formik.handleChange}
              error={formik.touched.email ? formik.errors.email : ''}
            />
            <Input
              label="Password"
              type={showPassword ? 'text' : 'password'}
              name="password"
              onChange={formik.handleChange}
              rightIcon={
                showPassword ? (
                  <Icon
                    icon="ooui:eye-closed"
                    className="cursor-pointer"
                    onClick={handleShowPassword}
                  />
                ) : (
                  <Icon
                    icon="uiw:eye"
                    className="cursor-pointer"
                    onClick={handleShowPassword}
                  />
                )
              }
              error={formik.touched.password ? formik.errors.password : ''}
            />
            <Button type="submit" text="Submit" isLoading={login.isPending} />
          </form>
        </div>
      </section>
    </main>
  )
}

export default Login
