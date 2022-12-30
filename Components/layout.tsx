import Head from 'next/head'
import Link from 'next/link'
import React, { ReactElement } from 'react'
import { parseCookies } from 'nookies'
import { useSelector } from 'react-redux'
import cookie from 'js-cookie'
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'
import { logOut } from '../Store/CartSlice'
import { RootState } from '../Store/Store'
import { FaUser } from 'react-icons/fa'
import { GrLogin } from 'react-icons/gr'



const Layout = ({ title, children }: { title: string, children: ReactElement }) => {
  const router = useRouter();
  const dispatch = useDispatch();

  const items = useSelector((state: RootState) => state.userCart.cartItems)

  const users = useSelector((state: RootState) => state.userCart.UserInfo)
  console.log(users)




  // ******Directly parse Tooken from Cookies ********* 

  const { token } = parseCookies();
  let user = false;
  if (token) {
    user = true
    console.log(user)
  } else {
    user = false
  }


  console.log(items)


  const logout = () => {
    cookie.remove('token')
    dispatch(logOut())

    router.push('/')
  }

  return (
    <>
      <Head>
        <title>{title ? title + '-Home Sheets' : "Home Sheets"}</title>
        <meta name="description" content="E-Commerce Store" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='flex  min-h-screen flex-col justify-between bg-white'>
        <header>
          <nav className='flex h-12 items-center px-4 bg-sky-400 justify-between shadow-md'>
            <>
            
            <Link className='text-lg font-bold text-white ' href='/'>
              Home Sheets
            </Link>

            {
              users.Role =='SYS-ADMIN'?
              <Link className='text-lg font-bold text-white ' href='/admin/dashboard'>Admin Dashboard</Link>:
              // router.push('/unauthorized')
            <Link href='/unauthorized' className='text-lg font-bold text-white' >
              Admin Dashboard
            </Link>
            }

            <div>


              <div className=" items-center px-2 flex justify-start" >


                <Link href="/cart" legacyBehavior><a className='p-2 font-bold text-white ml-[9rem]'> Cart

                  <span className='ml-2 h-[2rem] w-[2rem] rounded-full bg-black px-2 py-1 text-xs font-bold text-white'>{items.length}</span>

                </a>
                </Link>
                {user ?
                  <>

                    <Link href='/'>
                      <div className=''>
                        <button className='text-white m-2 flex justify-start gap-2' onClick={() => logout()}>
                          <FaUser className='h-5 w-5 fill-black'></FaUser>
                          <h3>{users.userName}</h3>


                        </button>
                      </div>

                    </Link>

                  </>
                  :
                  <>
                    <Link href="/login" legacyBehavior><a className='p-2 flex justify-start gap-2 text-white'>
                      <GrLogin className='h-5 w-5 fill-black'></GrLogin>
                      Login</a></Link>

                  </>
                }
                <Link href='/contact' className='text-white'>Conatct</Link>
                <Link href='/team' className='m-2 text-white'>Team</Link>
                <Link href='/orderhistory' className='text-white'>My Orders</Link>

              </div>



            </div>
            </>
          </nav>
        </header>

        <main className='container m-auto mt-4 px-4 '>{children}</main>


      </div>
    </>
  )
}

export default Layout