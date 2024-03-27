import Header from './Header'

type Props = {
  children: React.ReactNode
}
const Layout: React.FC<Props> = (props) => (
  <div className='overflow-y-auto overflow-x-hidden h-screen'>
    <Header />
    <div className="w-full h-5/6 justify-start flex flex-col items-center pt-10 pb-8">{props.children}</div>
  </div>
)

export default Layout
