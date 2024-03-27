import Link from "next/link"
import { useRouter } from "next/router"
import { useState } from "react"

const Header = () => {
  const router = useRouter()

  function isActive(pathname: string) {
    return router.pathname === pathname
  }

  const offers = [
    "Get 10% off on business sign up",
    "Get 5% off on early sign up",
    "Get 15% off on by referring a friend",
  ]

  const [currentOffer, setCurrentOffer] = useState<number>(0)

  return (
    <nav className="flex flex-col overflow-hidden">
      <div className="w-full flex justify-end items-center px-10 py-3">
        <div className="flex items-center pl-[14px] space-x-5">
          <Link href="/" legacyBehavior>
            <a
              data-active={isActive("/")}
              className="text-white hover:text-gray-300"
            >
              Help
            </a>
          </Link>
          <Link href="/drafts" legacyBehavior>
            <a
              data-active={isActive("/drafts")}
              className="text-white hover:text-gray-300"
            >
              Orders & Returns
            </a>
          </Link>
          <Link href="/drafts" legacyBehavior>
            <a
              data-active={isActive("/drafts")}
              className="text-white hover:text-gray-300"
            >
              Hi, John
            </a>
          </Link>
        </div>
      </div>
      <div className="w-full flex justify-between items-center px-10 pt-[7px] pb-[18px]">
        <h1 className="uppercase leading-">Ecommerce</h1>
        <div className="flex space-x-8 items-center">
        <Link href="/" legacyBehavior>
            <a
              data-active={isActive("/")}
              className="text-white hover:text-gray-300"
            >
              Categories
            </a>
          </Link>
          <Link href="/drafts" legacyBehavior>
            <a
              data-active={isActive("/drafts")}
              className="text-white hover:text-gray-300"
            >
              Sale
            </a>
          </Link>
          <Link href="/drafts" legacyBehavior>
            <a
              data-active={isActive("/drafts")}
              className="text-white hover:text-gray-300"
            >
              Clearance
            </a>
          </Link>
          <Link href="/" legacyBehavior>
            <a
              data-active={isActive("/")}
              className="text-white hover:text-gray-300"
            >
              New stock
            </a>
          </Link>
          <Link href="/drafts" legacyBehavior>
            <a
              data-active={isActive("/drafts")}
              className="text-white hover:text-gray-300"
            >
              Trending
            </a>
          </Link>
        </div>
        <div className="flex space-x-8 items-center">
        <Link href="/" legacyBehavior>
            <a
              data-active={isActive("/")}
              className="text-white hover:text-gray-300"
            >
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M25.5145 24.4587L20.8214 19.7656C22.1843 18.131 22.8646 16.0338 22.7206 13.9104C22.5767 11.7871 21.6197 9.8009 20.0486 8.36517C18.4776 6.92944 16.4135 6.15468 14.2858 6.20206C12.158 6.24945 10.1305 7.11532 8.62492 8.61957C7.11935 10.1238 6.25168 12.1506 6.20241 14.2783C6.15315 16.406 6.92609 18.4707 8.36043 20.0431C9.79477 21.6154 11.7801 22.5742 13.9033 22.72C16.0266 22.8658 18.1243 22.1874 19.7601 20.8259L24.4533 25.5199C24.5229 25.5896 24.6057 25.6449 24.6967 25.6826C24.7878 25.7203 24.8853 25.7397 24.9839 25.7397C25.0824 25.7397 25.18 25.7203 25.2711 25.6826C25.3621 25.6449 25.4448 25.5896 25.5145 25.5199C25.5842 25.4503 25.6395 25.3675 25.6772 25.2765C25.7149 25.1854 25.7343 25.0879 25.7343 24.9893C25.7343 24.8908 25.7149 24.7932 25.6772 24.7021C25.6395 24.6111 25.5842 24.5284 25.5145 24.4587ZM7.73388 14.4893C7.73388 13.1543 8.12977 11.8492 8.87146 10.7392C9.61316 9.62919 10.6674 8.76402 11.9008 8.25313C13.1342 7.74224 14.4914 7.60857 15.8007 7.86902C17.1101 8.12947 18.3129 8.77234 19.2569 9.71635C20.2009 10.6604 20.8437 11.8631 21.1042 13.1725C21.3646 14.4818 21.231 15.839 20.7201 17.0724C20.2092 18.3058 19.344 19.36 18.234 20.1017C17.124 20.8434 15.8189 21.2393 14.4839 21.2393C12.6943 21.2373 10.9785 20.5255 9.71311 19.2601C8.44767 17.9947 7.73587 16.2789 7.73388 14.4893Z" fill="#333333"/>
</svg>

            </a>
          </Link>
          <Link href="/drafts" legacyBehavior>
            <a
              data-active={isActive("/drafts")}
              className="text-white hover:text-gray-300"
            >
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14 24.25C14 24.5467 13.912 24.8367 13.7472 25.0834C13.5824 25.33 13.3481 25.5223 13.074 25.6358C12.7999 25.7494 12.4983 25.7791 12.2074 25.7212C11.9164 25.6633 11.6491 25.5204 11.4393 25.3107C11.2296 25.1009 11.0867 24.8336 11.0288 24.5426C10.9709 24.2517 11.0006 23.9501 11.1142 23.676C11.2277 23.4019 11.42 23.1676 11.6666 23.0028C11.9133 22.838 12.2033 22.75 12.5 22.75C12.8978 22.75 13.2794 22.908 13.5607 23.1893C13.842 23.4706 14 23.8522 14 24.25ZM22.25 22.75C21.9533 22.75 21.6633 22.838 21.4166 23.0028C21.17 23.1676 20.9777 23.4019 20.8642 23.676C20.7506 23.9501 20.7209 24.2517 20.7788 24.5426C20.8367 24.8336 20.9796 25.1009 21.1893 25.3107C21.3991 25.5204 21.6664 25.6633 21.9574 25.7212C22.2483 25.7791 22.5499 25.7494 22.824 25.6358C23.0981 25.5223 23.3324 25.33 23.4972 25.0834C23.662 24.8367 23.75 24.5467 23.75 24.25C23.75 23.8522 23.592 23.4706 23.3107 23.1893C23.0294 22.908 22.6478 22.75 22.25 22.75ZM26.7172 10.9703L24.0425 19.6619C23.9024 20.1226 23.6175 20.5259 23.2301 20.812C22.8427 21.0981 22.3734 21.2517 21.8919 21.25H12.8816C12.3931 21.2482 11.9184 21.0882 11.5285 20.7939C11.1386 20.4997 10.8545 20.087 10.7188 19.6178L7.32687 7.75H5.75C5.55109 7.75 5.36032 7.67098 5.21967 7.53033C5.07902 7.38968 5 7.19891 5 7C5 6.80109 5.07902 6.61032 5.21967 6.46967C5.36032 6.32902 5.55109 6.25 5.75 6.25H7.32687C7.65257 6.25108 7.96916 6.35761 8.22925 6.55365C8.48934 6.74969 8.67895 7.0247 8.76969 7.3375L9.53 10H26C26.1174 9.99996 26.2331 10.0275 26.3379 10.0803C26.4427 10.1331 26.5336 10.2098 26.6034 10.3042C26.6732 10.3986 26.7198 10.508 26.7396 10.6237C26.7593 10.7394 26.7517 10.8581 26.7172 10.9703ZM24.9847 11.5H9.95844L12.1606 19.2062C12.2054 19.3629 12.3 19.5007 12.4301 19.5988C12.5602 19.6969 12.7186 19.75 12.8816 19.75H21.8919C22.0524 19.7501 22.2086 19.6986 22.3377 19.6033C22.4668 19.508 22.5619 19.3737 22.6091 19.2203L24.9847 11.5Z" fill="#333333"/>
</svg>

            </a>
          </Link>
        </div>
      </div>
      <div className="w-full bg-[#F4F4F4] flex justify-center items-center py-2 space-x-6">
        <button onClick={() => setCurrentOffer(state=>state!=0?state-1:offers?.length-1)} className="text-[14px]">{'<'}</button>
        <Link href="/" legacyBehavior>
          <a
            data-active={isActive("/")}
            className="w-2/12 line-clamp-1 text-center text-white text-[14px] hover:text-gray-300"
          >
            {offers[currentOffer]}
          </a>
        </Link>
        <button onClick={() => setCurrentOffer(state=>state!=offers?.length-1?state+1:0)} className="text-[14px]">{'>'}</button>
      </div>
    </nav>
  );
}

export default Header
