import React from 'react'
import Logo from '../assets/Logo'
export default function Navbar() {
  return (
    <nav className='inset-0 flex absolute  '>
      <div className='mr-auto z-10 w-14 px-10 py-10 h-[580px] bg-gray-800 opacity-80'>
        <ul className='py-5 flex flex-col items-center gap-20'>
          <li className='cursor-pointer'>
            <Logo />
          </li>
          <li>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M17.7288 7.82923L15.8639 6.42294V2.53465H13.1992V4.41232L9.99982 2L2.26804 7.82923C2.10858 7.97709 2.01253 8.18091 2 8.39801V17.3008C2.00078 17.6846 2.31152 17.9956 2.69533 17.9968H17.3015C17.6853 17.9956 17.996 17.6846 17.9968 17.3008V8.39872C17.9845 8.18137 17.8884 7.97726 17.7288 7.82923Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>     
          </svg>
          </li>
          <li>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 18V2" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M18 2V18" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M6.26666 2H13.7333V8.4H6.26666V2Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M6.26666 11.6H13.7333V18H6.26666V11.6Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M4.4 3.59999C4.4 3.65274 4.38436 3.70429 4.35506 3.74815C4.32576 3.792 4.28411 3.82618 4.23538 3.84636C4.18666 3.86655 4.13304 3.87183 4.08131 3.86154C4.02958 3.85125 3.98207 3.82585 3.94477 3.78856C3.90748 3.75126 3.88208 3.70375 3.87179 3.65202C3.8615 3.60029 3.86678 3.54667 3.88697 3.49795C3.90715 3.44922 3.94133 3.40757 3.98518 3.37827C4.02904 3.34897 4.08059 3.33333 4.13334 3.33333C4.20406 3.33333 4.27189 3.36142 4.3219 3.41143C4.37191 3.46144 4.4 3.52927 4.4 3.59999Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M4.4 7.86667C4.4 7.91941 4.38436 7.97097 4.35506 8.01482C4.32576 8.05868 4.28411 8.09286 4.23538 8.11304C4.18666 8.13322 4.13304 8.1385 4.08131 8.12822C4.02958 8.11793 3.98207 8.09253 3.94477 8.05523C3.90748 8.01794 3.88208 7.97043 3.87179 7.9187C3.8615 7.86697 3.86678 7.81335 3.88697 7.76462C3.90715 7.7159 3.94133 7.67425 3.98518 7.64495C4.02904 7.61565 4.08059 7.60001 4.13334 7.60001C4.20406 7.60001 4.27189 7.6281 4.3219 7.67811C4.37191 7.72812 4.4 7.79595 4.4 7.86667Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M4.4 12.1333C4.4 12.1861 4.38436 12.2376 4.35506 12.2815C4.32576 12.3253 4.28411 12.3595 4.23538 12.3797C4.18666 12.3999 4.13304 12.4052 4.08131 12.3949C4.02958 12.3846 3.98207 12.3592 3.94477 12.3219C3.90748 12.2846 3.88208 12.2371 3.87179 12.1854C3.8615 12.1336 3.86678 12.08 3.88697 12.0313C3.90715 11.9826 3.94133 11.9409 3.98518 11.9116C4.02904 11.8823 4.08059 11.8667 4.13334 11.8667C4.20406 11.8667 4.27189 11.8948 4.3219 11.9448C4.37191 11.9948 4.4 12.0626 4.4 12.1333Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M4.4 16.4C4.4 16.4527 4.38436 16.5043 4.35506 16.5482C4.32576 16.592 4.28411 16.6262 4.23538 16.6464C4.18666 16.6665 4.13304 16.6718 4.08131 16.6615C4.02958 16.6513 3.98207 16.6259 3.94477 16.5886C3.90748 16.5513 3.88208 16.5037 3.87179 16.452C3.8615 16.4003 3.86678 16.3467 3.88697 16.2979C3.90715 16.2492 3.94133 16.2076 3.98518 16.1783C4.02904 16.149 4.08059 16.1333 4.13334 16.1333C4.20406 16.1333 4.27189 16.1614 4.3219 16.2114C4.37191 16.2614 4.4 16.3293 4.4 16.4Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M16.1333 3.59999C16.1333 3.65274 16.1177 3.70429 16.0884 3.74815C16.0591 3.792 16.0174 3.82618 15.9687 3.84636C15.92 3.86655 15.8664 3.87183 15.8146 3.86154C15.7629 3.85125 15.7154 3.82585 15.6781 3.78856C15.6408 3.75126 15.6154 3.70375 15.6051 3.65202C15.5948 3.60029 15.6001 3.54667 15.6203 3.49795C15.6405 3.44922 15.6747 3.40757 15.7185 3.37827C15.7624 3.34897 15.8139 3.33333 15.8667 3.33333C15.9374 3.33333 16.0052 3.36142 16.0552 3.41143C16.1052 3.46144 16.1333 3.52927 16.1333 3.59999Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M16.1333 7.86667C16.1333 7.91941 16.1177 7.97097 16.0884 8.01482C16.0591 8.05868 16.0174 8.09286 15.9687 8.11304C15.92 8.13322 15.8664 8.1385 15.8146 8.12822C15.7629 8.11793 15.7154 8.09253 15.6781 8.05523C15.6408 8.01794 15.6154 7.97043 15.6051 7.9187C15.5948 7.86697 15.6001 7.81335 15.6203 7.76462C15.6405 7.7159 15.6747 7.67425 15.7185 7.64495C15.7624 7.61565 15.8139 7.60001 15.8667 7.60001C15.9374 7.60001 16.0052 7.6281 16.0552 7.67811C16.1052 7.72812 16.1333 7.79595 16.1333 7.86667Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M16.1333 12.1333C16.1333 12.1861 16.1177 12.2376 16.0884 12.2815C16.0591 12.3253 16.0174 12.3595 15.9687 12.3797C15.92 12.3999 15.8664 12.4052 15.8146 12.3949C15.7629 12.3846 15.7154 12.3592 15.6781 12.3219C15.6408 12.2846 15.6154 12.2371 15.6051 12.1854C15.5948 12.1336 15.6001 12.08 15.6203 12.0313C15.6405 11.9826 15.6747 11.9409 15.7185 11.9116C15.7624 11.8823 15.8139 11.8667 15.8667 11.8667C15.9374 11.8667 16.0052 11.8948 16.0552 11.9448C16.1052 11.9948 16.1333 12.0626 16.1333 12.1333Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M16.1333 16.4C16.1333 16.4527 16.1177 16.5043 16.0884 16.5482C16.0591 16.592 16.0174 16.6262 15.9687 16.6464C15.92 16.6665 15.8664 16.6718 15.8146 16.6615C15.7629 16.6513 15.7154 16.6259 15.6781 16.5886C15.6408 16.5513 15.6154 16.5037 15.6051 16.452C15.5948 16.4003 15.6001 16.3467 15.6203 16.2979C15.6405 16.2492 15.6747 16.2076 15.7185 16.1783C15.7624 16.149 15.8139 16.1333 15.8667 16.1333C15.9374 16.1333 16.0052 16.1614 16.0552 16.2114C16.1052 16.2614 16.1333 16.3293 16.1333 16.4Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </li>
          <li>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.38461 3.60001H17.6154V14.7692H2.38461V3.60001Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M12.5385 3.60001V14.7692" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M14.5692 9.69232H15.5846" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M14.5692 11.7231H15.5846" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M15.0769 6.89999C15.1271 6.89999 15.1762 6.91488 15.218 6.94277C15.2597 6.97067 15.2922 7.01031 15.3114 7.0567C15.3307 7.10308 15.3357 7.15412 15.3259 7.20336C15.3161 7.2526 15.2919 7.29784 15.2564 7.33334C15.2209 7.36884 15.1757 7.39301 15.1264 7.40281C15.0772 7.4126 15.0262 7.40758 14.9798 7.38836C14.9334 7.36915 14.8937 7.33661 14.8659 7.29487C14.838 7.25312 14.8231 7.20405 14.8231 7.15384C14.8231 7.08652 14.8498 7.02195 14.8974 6.97434C14.945 6.92674 15.0096 6.89999 15.0769 6.89999" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M3.39999 16.8L5.43076 14.7692" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M16.6 16.8L14.5692 14.7692" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>

          </li>
          <li>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 2L12 7.74222H18L13.3333 11.4578L15 17.2L10 13.8222L5 17.2L6.66667 11.4578L2 7.74222H8L10 2Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>

          </li>
        </ul>
      </div>
      <ul className='z-10 flex items-center h-10 px-10 gap-5 py-10'>
        <li>
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M20 21.6654C23.2213 21.6654 25.8327 19.054 25.8327 15.8327C25.8327 12.6114 23.2213 10 20 10C16.7787 10 14.1674 12.6114 14.1674 15.8327C14.1674 19.054 16.7787 21.6654 20 21.6654Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M29 30.1492C27.6517 26.335 24.0455 23.785 20 23.785C15.9545 23.785 12.3483 26.335 11 30.1492" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </li>
        <li>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_906_144)">
<path d="M10.546 2.438C10.7295 2.6417 10.9538 2.80457 11.2043 2.91605C11.4548 3.02754 11.7259 3.08514 12 3.08514C12.2742 3.08514 12.5453 3.02754 12.7958 2.91605C13.0463 2.80457 13.2705 2.6417 13.454 2.438L14.4 1.4C14.6712 1.09995 15.0285 0.891146 15.423 0.802265C15.8175 0.713384 16.2299 0.748776 16.6035 0.903585C16.9771 1.05839 17.2936 1.32503 17.5097 1.6669C17.7257 2.00877 17.8306 2.40912 17.81 2.813L17.739 4.213C17.7253 4.48611 17.7689 4.75907 17.8671 5.01429C17.9653 5.26951 18.1158 5.50134 18.309 5.69484C18.5023 5.88834 18.7339 6.03922 18.9889 6.13777C19.244 6.23631 19.5169 6.28034 19.79 6.267L21.19 6.196C21.5937 6.17611 21.9936 6.28152 22.3349 6.49779C22.6763 6.71407 22.9424 7.03062 23.0968 7.40407C23.2513 7.77752 23.2864 8.18958 23.1975 8.58379C23.1085 8.97799 22.8999 9.33504 22.6 9.606L21.558 10.546C21.3546 10.7298 21.192 10.9542 21.0806 11.2047C20.9693 11.4552 20.9118 11.7264 20.9118 12.0005C20.9118 12.2747 20.9693 12.5458 21.0806 12.7963C21.192 13.0468 21.3546 13.2712 21.558 13.455L22.6 14.395C22.9001 14.6661 23.1089 15.0235 23.1978 15.418C23.2867 15.8125 23.2513 16.2249 23.0965 16.5985C22.9417 16.9721 22.675 17.2886 22.3331 17.5046C21.9913 17.7206 21.5909 17.8256 21.187 17.805L19.787 17.734C19.5133 17.7199 19.2397 17.7635 18.9839 17.8618C18.7281 17.9601 18.4957 18.1111 18.3019 18.3049C18.1081 18.4987 17.9572 18.731 17.8588 18.9869C17.7605 19.2427 17.717 19.5163 17.731 19.79L17.802 21.19C17.8199 21.5919 17.7137 21.9895 17.4978 22.3289C17.2818 22.6682 16.9666 22.9329 16.595 23.0869C16.2234 23.2409 15.8134 23.2768 15.4207 23.1897C15.028 23.1026 14.6717 22.8967 14.4 22.6L13.459 21.559C13.2754 21.3556 13.0511 21.193 12.8006 21.0817C12.5501 20.9704 12.2791 20.9128 12.005 20.9128C11.731 20.9128 11.4599 20.9704 11.2095 21.0817C10.959 21.193 10.7347 21.3556 10.551 21.559L9.60604 22.6C9.33485 22.8981 8.97833 23.1053 8.58509 23.1934C8.19184 23.2814 7.781 23.2461 7.40858 23.0921C7.03617 22.9382 6.72029 22.6731 6.50401 22.3331C6.28774 21.993 6.18159 21.5946 6.20004 21.192L6.27204 19.792C6.28612 19.5183 6.24258 19.2447 6.14424 18.9889C6.04589 18.733 5.89494 18.5007 5.70114 18.3069C5.50734 18.1131 5.27501 17.9622 5.01919 17.8638C4.76337 17.7655 4.48975 17.7219 4.21604 17.736L2.81604 17.807C2.41233 17.8281 2.01198 17.7237 1.66998 17.5081C1.32797 17.2926 1.06108 16.9764 0.905923 16.6031C0.750771 16.2298 0.714973 15.8176 0.803445 15.4232C0.891916 15.0287 1.10032 14.6713 1.40004 14.4L2.44104 13.46C2.64449 13.2762 2.80712 13.0518 2.91843 12.8013C3.02974 12.5508 3.08726 12.2797 3.08726 12.0055C3.08726 11.7314 3.02974 11.4602 2.91843 11.2097C2.80712 10.9592 2.64449 10.7348 2.44104 10.551L1.40004 9.606C1.10129 9.33501 0.893524 8.97836 0.805142 8.58481C0.71676 8.19126 0.752077 7.78002 0.906263 7.4073C1.06045 7.03458 1.32598 6.71858 1.66656 6.50248C2.00714 6.28639 2.40615 6.18075 2.80904 6.2L4.20904 6.271C4.48327 6.28542 4.75746 6.242 5.01382 6.14354C5.27017 6.04509 5.50295 5.89382 5.69703 5.69955C5.89111 5.50528 6.04216 5.27235 6.14036 5.0159C6.23856 4.75946 6.28172 4.48522 6.26704 4.211L6.20004 2.81C6.18115 2.40727 6.28697 2.00851 6.50308 1.66815C6.71919 1.32778 7.03506 1.06238 7.40758 0.908167C7.7801 0.753953 8.19113 0.718434 8.58458 0.806457C8.97803 0.89448 9.33475 1.10176 9.60604 1.4L10.546 2.438Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7.5 12.001C7.5 13.1945 7.97411 14.3391 8.81802 15.183C9.66193 16.0269 10.8065 16.501 12 16.501C13.1935 16.501 14.3381 16.0269 15.182 15.183C16.0259 14.3391 16.5 13.1945 16.5 12.001C16.5 10.8075 16.0259 9.66294 15.182 8.81903C14.3381 7.97511 13.1935 7.50101 12 7.50101C10.8065 7.50101 9.66193 7.97511 8.81802 8.81903C7.97411 9.66294 7.5 10.8075 7.5 12.001V12.001Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_906_144">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>

        </li>
      </ul>
    </nav>
  )
}
