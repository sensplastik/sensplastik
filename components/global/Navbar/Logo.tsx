'use client'

import { useTheme } from 'next-themes'
import React, { useEffect, useState } from 'react'

interface LogoProps {
  color?: string
}

export function Logo({ color = '' }: LogoProps) {
  const { theme } = useTheme()

  const [currentColor, setCurrentColor] = useState(color)

  useEffect(() => {
      theme === 'light'
        ? setCurrentColor('#1f1e1c')
        : setCurrentColor('#e3e1dd')
    
  }, [theme])

  return (
    <>
      <svg
        className="logo"
        width="123"
        height="22"
        viewBox="0 0 123 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g>
          <path
            d="M2.22085 12.5618C2.41446 13.7528 2.89279 14.6067 3.65585 15.1348C4.4189 15.6629 5.55779 15.9326 7.06112 15.9326C8.56446 15.9326 8.45057 15.8539 8.95168 15.6854C9.45279 15.5169 9.86279 15.2921 10.1703 15.0225C10.4778 14.7416 10.6942 14.4157 10.8195 14.0449C10.9447 13.6742 11.0131 13.2809 11.0131 12.8652C11.0131 12.4494 10.9675 12.2135 10.8878 11.8989C10.8081 11.5955 10.6486 11.3146 10.4208 11.0562C10.1931 10.7978 9.86279 10.5843 9.45279 10.3933C9.04279 10.2022 8.5189 10.0562 7.88112 9.94382L5.71724 9.5618C4.86307 9.41573 4.1114 9.22472 3.45085 8.98876C2.79029 8.75281 2.23224 8.44944 1.77668 8.07865C1.32112 7.70787 0.979457 7.24719 0.740291 6.68539C0.512513 6.13483 0.387235 5.46067 0.387235 4.66292C0.387235 3.86517 0.54668 3.20225 0.876957 2.61798C1.20724 2.03371 1.6514 1.53933 2.20946 1.14607C2.76751 0.752809 3.43946 0.460674 4.20251 0.269663C4.96557 0.0786517 5.81974 0 6.71946 0C7.61918 0 8.81501 0.123595 9.57807 0.370786C10.3411 0.617977 10.9675 0.94382 11.4458 1.35955C11.9242 1.77528 12.2886 2.24719 12.5392 2.77528C12.7897 3.30337 12.972 3.85393 13.1086 4.40449L11.0358 4.80899C10.9106 4.33708 10.7397 3.91011 10.5461 3.53933C10.3411 3.16854 10.0792 2.85393 9.7489 2.61798C9.41862 2.37079 9.02001 2.19101 8.53029 2.05618C8.05196 1.93258 7.45973 1.86517 6.7764 1.86517C6.09307 1.86517 5.33001 1.93258 4.80612 2.07865C4.27085 2.22472 3.84946 2.41573 3.53057 2.66292C3.21168 2.91011 2.9839 3.20225 2.84724 3.53933C2.71057 3.8764 2.64224 4.23595 2.64224 4.61798C2.64224 5 2.69918 5.39326 2.80168 5.69663C2.90418 6 3.0864 6.26966 3.33696 6.50562C3.58751 6.73034 3.9064 6.92135 4.3164 7.07865C4.71501 7.22472 5.21612 7.35955 5.80835 7.47191L8.2114 7.89888C9.98807 8.23596 11.2978 8.78652 12.1406 9.55056C12.972 10.3146 13.3933 11.4494 13.3933 12.9326C13.3933 14.4157 13.2567 14.2472 12.9947 14.8427C12.7328 15.4382 12.3342 15.9551 11.8103 16.3933C11.2864 16.8315 10.6372 17.191 9.8514 17.4382C9.06557 17.6966 8.14307 17.8202 7.0839 17.8202C6.02473 17.8202 5.15918 17.7191 4.32779 17.5281C3.4964 17.3258 2.7789 17.0225 2.17529 16.5843C1.56029 16.1573 1.07057 15.6067 0.706124 14.9438C0.34168 14.2809 0.113902 13.4831 0.0341797 12.573H2.25501L2.22085 12.5618Z"
            fill={currentColor}
          />
          <path
            d="M25.7161 13.9438C25.5111 15.1348 24.9758 16.0674 24.1103 16.7416C23.2561 17.427 22.0147 17.7641 20.4089 17.7641C18.8031 17.7641 17.0606 17.2023 16.0469 16.0674C15.0333 14.9326 14.5322 13.3596 14.5322 11.3259C14.5322 9.29215 14.6803 9.32586 14.965 8.4944C15.2497 7.67417 15.6597 6.97754 16.1836 6.42698C16.7075 5.87642 17.3225 5.44945 18.0514 5.15732C18.7689 4.86518 19.5547 4.71912 20.4089 4.71912C21.2631 4.71912 22.1969 4.86518 22.8917 5.16855C23.5864 5.47193 24.1444 5.88766 24.5886 6.41575C25.0328 6.94384 25.3631 7.57305 25.5794 8.30339C25.7958 9.03372 25.9097 9.83148 25.9097 10.7079V11.7528H16.6619C16.6619 12.3708 16.7417 12.9438 16.9125 13.4719C17.0833 14 17.3225 14.4607 17.63 14.8539C17.9375 15.2472 18.3361 15.5506 18.8031 15.7641C19.27 15.9888 19.8053 16.1011 20.4203 16.1011C21.4681 16.1011 22.2311 15.9101 22.7094 15.5169C23.1878 15.1236 23.5181 14.6068 23.7003 13.9326H25.7275L25.7161 13.9438ZM23.8142 10.2135C23.8142 9.62923 23.7458 9.10114 23.6206 8.61799C23.4953 8.14608 23.2903 7.73035 23.0169 7.39327C22.7436 7.0562 22.3906 6.78653 21.9578 6.59552C21.525 6.40451 21.0011 6.31462 20.3975 6.31462C19.2928 6.31462 18.4272 6.6517 17.8122 7.31462C17.1972 7.97754 16.8328 8.94384 16.7189 10.2135H23.8256H23.8142Z"
            fill={currentColor}
          />
          <path
            d="M27.4702 5.11237H29.543V6.98877C30.158 6.17979 30.8299 5.60675 31.5702 5.25844C32.3105 4.91012 33.0849 4.73035 33.9049 4.73035C35.3172 4.73035 36.3649 5.11237 37.0483 5.86518C37.7316 6.62922 38.0733 7.74158 38.0733 9.21349V17.382H35.9777V9.61799C35.9777 8.48316 35.7727 7.67417 35.3513 7.20226C34.9299 6.73035 34.2922 6.50563 33.4266 6.50563C32.561 6.50563 32.5041 6.58428 32.0372 6.74158C31.5816 6.89889 31.1716 7.15731 30.7958 7.50563C30.3972 7.85394 30.0897 8.22473 29.8847 8.60675C29.6797 9.00001 29.5772 9.49439 29.5772 10.1124V17.382H27.4816V5.11237H27.4702Z"
            fill={currentColor}
          />
          <path
            d="M41.3418 13.7978C41.4899 14.6517 41.8543 15.2472 42.4352 15.5955C43.016 15.9326 43.8246 16.1011 44.8268 16.1011C45.8291 16.1011 46.6377 15.9214 47.0818 15.5618C47.526 15.2023 47.7424 14.7303 47.7424 14.1461C47.7424 13.5618 47.7196 13.6854 47.6627 13.4719C47.6057 13.2584 47.5032 13.0674 47.3324 12.8989C47.173 12.7303 46.9452 12.5843 46.6605 12.4607C46.3757 12.3371 45.9999 12.236 45.533 12.1573L43.9385 11.9214C43.2324 11.809 42.6174 11.6629 42.0821 11.4944C41.5468 11.3258 41.1027 11.0899 40.7382 10.8202C40.3738 10.5393 40.0891 10.2023 39.9068 9.79776C39.7246 9.39326 39.6335 8.91012 39.6335 8.33708C39.6335 7.76405 39.7588 7.25843 40.0093 6.82023C40.2599 6.38203 40.6016 6 41.0457 5.69663C41.4899 5.39326 42.0138 5.14607 42.606 4.98877C43.2096 4.82023 43.8588 4.74158 44.5649 4.74158C45.271 4.74158 46.2163 4.83146 46.8199 5C47.4235 5.17978 47.9132 5.41573 48.3005 5.70787C48.6877 6.01124 48.9838 6.37079 49.1888 6.77528C49.3938 7.19102 49.5532 7.61798 49.6671 8.07866L47.7652 8.38203C47.6513 8.04495 47.526 7.75281 47.378 7.50562C47.2299 7.2472 47.0363 7.04495 46.7971 6.87641C46.558 6.70787 46.2618 6.58427 45.9202 6.49439C45.5785 6.4045 45.1457 6.35955 44.6332 6.35955C44.1207 6.35955 43.5741 6.41573 43.1868 6.51686C42.7996 6.61798 42.4921 6.76405 42.2643 6.93259C42.0366 7.11236 41.8657 7.30338 41.7746 7.51686C41.6835 7.73034 41.6266 7.95506 41.6266 8.19102C41.6266 8.42697 41.6607 8.67416 41.7177 8.86517C41.786 9.06742 41.8999 9.23596 42.0821 9.39326C42.253 9.53933 42.5035 9.67416 42.7996 9.78652C43.1071 9.89888 43.4943 9.98877 43.9841 10.0674L45.7949 10.3483C47.2527 10.5843 48.3005 11 48.9382 11.5843C49.576 12.1685 49.8949 13.0225 49.8949 14.1461C49.8949 15.2697 49.7924 15.1461 49.5874 15.5843C49.3824 16.0225 49.0635 16.4045 48.6535 16.7191C48.2321 17.0449 47.7196 17.2921 47.0932 17.4832C46.4668 17.6629 45.738 17.7528 44.9066 17.7528C44.0752 17.7528 43.4488 17.6854 42.7996 17.5393C42.1505 17.3933 41.581 17.1685 41.0799 16.8652C40.5788 16.5618 40.1802 16.1461 39.8727 15.6405C39.5652 15.1348 39.3943 14.5169 39.3374 13.7865H41.3646L41.3418 13.7978Z"
            fill={currentColor}
          />
          <path
            d="M51.3525 5.11237H53.4253V6.86518C53.9378 6.16855 54.5414 5.64046 55.2248 5.26968C55.9081 4.91013 56.7053 4.71912 57.6164 4.71912C58.5275 4.71912 59.2792 4.87642 59.9398 5.19103C60.6003 5.50563 61.1584 5.95507 61.6025 6.51687C62.0467 7.0899 62.377 7.76406 62.5934 8.55058C62.8098 9.33709 62.9237 10.2023 62.9237 11.1573C62.9237 12.1124 62.7984 13.0899 62.5364 13.8989C62.2745 14.7191 61.91 15.4045 61.4317 15.9775C60.9534 16.5506 60.3725 16.9888 59.6892 17.2921C59.0059 17.5955 58.2428 17.7528 57.3887 17.7528C56.5345 17.7528 55.9878 17.618 55.3045 17.3371C54.6212 17.0562 54.0062 16.5618 53.4595 15.8539V21.9775H51.3639V5.11237H51.3525ZM53.4253 11.5955C53.4253 12.382 53.5164 13.0674 53.6987 13.6292C53.8809 14.191 54.1314 14.6517 54.4617 15.0225C54.7806 15.382 55.1678 15.6517 55.612 15.8202C56.0561 15.9888 56.5459 16.0674 57.0812 16.0674C57.6164 16.0674 58.072 15.9775 58.5161 15.809C58.9603 15.6292 59.3362 15.3483 59.655 14.9663C59.9739 14.573 60.2245 14.0787 60.4181 13.4607C60.6003 12.8427 60.6914 12.0899 60.6914 11.2023C60.6914 10.3146 60.5889 9.53934 60.3953 8.9326C60.1903 8.32586 59.9284 7.83148 59.6095 7.47193C59.2906 7.11237 58.9261 6.84271 58.5161 6.68541C58.1062 6.5281 57.6848 6.44945 57.252 6.44945C56.8192 6.44945 56.2042 6.53934 55.7373 6.71912C55.2703 6.89889 54.8717 7.16855 54.5187 7.5281C54.177 7.88766 53.9037 8.33709 53.71 8.88766C53.5164 9.43822 53.4253 10.0674 53.4253 10.7753V11.6068V11.5955Z"
            fill={currentColor}
          />
          <path d="M64.5752 0H66.6708V17.3933H64.5752V0Z" fill={currentColor} />
          <path
            d="M76.499 15.6966C76.0549 16.236 75.474 16.6966 74.7907 17.0899C74.096 17.4832 73.2418 17.6742 72.2168 17.6742C71.1918 17.6742 71.021 17.5955 70.4971 17.4495C69.9732 17.3034 69.529 17.0674 69.1532 16.7641C68.7774 16.4607 68.4813 16.0674 68.2763 15.6068C68.0713 15.1461 67.9688 14.6068 67.9688 13.9888C67.9688 13.3708 68.151 12.4719 68.5154 11.9438C68.8799 11.4157 69.3582 11.0113 69.9618 10.7079C70.5654 10.4045 71.2374 10.191 72.0004 10.0674C72.7521 9.94383 73.5379 9.86518 74.3351 9.83148L76.4763 9.76406V9.29215C76.4763 8.24721 76.2485 7.4944 75.8043 7.03372C75.3601 6.57305 74.6199 6.34833 73.6176 6.34833C72.6154 6.34833 71.8865 6.50563 71.431 6.83148C70.964 7.15732 70.6565 7.60676 70.5199 8.16855L68.6179 7.95507C68.8457 6.83148 69.381 6.01125 70.2351 5.4944C71.0893 4.97754 72.2396 4.71912 73.6974 4.71912C75.1551 4.71912 75.3601 4.83148 75.9751 5.04496C76.5901 5.25844 77.0913 5.56181 77.4785 5.95507C77.8657 6.34833 78.139 6.84271 78.3099 7.42698C78.4807 8.01125 78.5604 8.67417 78.5604 9.39327V17.3708H76.5332V15.6854L76.499 15.6966ZM76.4421 11.236L74.449 11.3034C73.5949 11.3371 72.8887 11.4157 72.3307 11.5393C71.7726 11.6629 71.3285 11.8315 70.9982 12.045C70.6679 12.2584 70.4401 12.5281 70.3035 12.8427C70.1668 13.1573 70.0985 13.5281 70.0985 13.9326C70.0985 14.5506 70.2921 15.045 70.6679 15.4157C71.0438 15.7865 71.6701 15.9775 72.5357 15.9775C73.7771 15.9775 74.7338 15.6742 75.4285 15.0787C76.1232 14.4719 76.4649 13.6517 76.4649 12.6068V11.2247L76.4421 11.236Z"
            fill={currentColor}
          />
          <path
            d="M81.8404 13.7978C81.9884 14.6517 82.3529 15.2472 82.9337 15.5955C83.5145 15.9326 84.3232 16.1011 85.3254 16.1011C86.3276 16.1011 87.1362 15.9214 87.5804 15.5618C88.0245 15.2023 88.2409 14.7303 88.2409 14.1461C88.2409 13.5618 88.2182 13.6854 88.1612 13.4719C88.1043 13.2584 88.0018 13.0674 87.8309 12.8989C87.6715 12.7303 87.4437 12.5843 87.159 12.4607C86.8743 12.3371 86.4984 12.236 86.0315 12.1573L84.4371 11.9214C83.7309 11.809 83.1159 11.6629 82.5807 11.4944C82.0454 11.3258 81.6012 11.0899 81.2368 10.8202C80.8723 10.5393 80.5876 10.2023 80.4054 9.79776C80.2232 9.39326 80.132 8.91012 80.132 8.33708C80.132 7.76405 80.2573 7.25843 80.5079 6.82023C80.7584 6.38203 81.1001 6 81.5443 5.69663C81.9884 5.39326 82.5123 5.14607 83.1045 4.98877C83.7082 4.82023 84.3573 4.74158 85.0634 4.74158C85.7696 4.74158 86.7148 4.83146 87.3184 5C87.922 5.17978 88.4118 5.41573 88.799 5.70787C89.1862 6.01124 89.4823 6.37079 89.6873 6.77528C89.8923 7.19102 90.0518 7.61798 90.1657 8.07866L88.2637 8.38203C88.1498 8.04495 88.0245 7.75281 87.8765 7.50562C87.7284 7.2472 87.5348 7.04495 87.2957 6.87641C87.0565 6.70787 86.7604 6.58427 86.4187 6.49439C86.077 6.4045 85.6443 6.35955 85.1318 6.35955C84.6193 6.35955 84.0726 6.41573 83.6854 6.51686C83.2982 6.61798 82.9907 6.76405 82.7629 6.93259C82.5351 7.11236 82.3643 7.30338 82.2732 7.51686C82.1821 7.73034 82.1251 7.95506 82.1251 8.19102C82.1251 8.42697 82.1593 8.67416 82.2162 8.86517C82.2846 9.06742 82.3984 9.23596 82.5807 9.39326C82.7515 9.53933 83.0021 9.67416 83.2982 9.78652C83.6057 9.89888 83.9929 9.98877 84.4826 10.0674L86.2934 10.3483C87.7512 10.5843 88.799 11 89.4368 11.5843C90.0745 12.1685 90.3934 13.0225 90.3934 14.1461C90.3934 15.2697 90.2909 15.1461 90.0859 15.5843C89.8809 16.0225 89.562 16.4045 89.152 16.7191C88.7307 17.0449 88.2182 17.2921 87.5918 17.4832C86.9654 17.6629 86.2365 17.7528 85.4051 17.7528C84.5737 17.7528 83.9473 17.6854 83.2982 17.5393C82.649 17.3933 82.0795 17.1685 81.5784 16.8652C81.0773 16.5618 80.6787 16.1461 80.3712 15.6405C80.0637 15.1348 79.8929 14.5169 79.8359 13.7865H81.8632L81.8404 13.7978Z"
            fill={currentColor}
          />
          <path
            d="M92.5805 6.74157H90.6558V5.10112H92.5805V0H94.676V5.11236H97.9788V6.75281H94.676V13.9551C94.676 14.5618 94.8127 15.0449 95.086 15.4045C95.3594 15.764 95.7808 15.9551 96.3388 15.9551C96.8969 15.9551 96.9994 15.9326 97.2613 15.8876C97.5233 15.8427 97.7738 15.7753 97.9902 15.6966L98.3546 17.2921C98.0358 17.4045 97.6827 17.4944 97.3069 17.5618C96.931 17.6292 96.4869 17.6742 95.9744 17.6742C95.4619 17.6742 94.6988 17.573 94.266 17.3708C93.8333 17.1685 93.4916 16.8764 93.2296 16.4944C92.9677 16.1124 92.7969 15.6629 92.7171 15.1348C92.626 14.6067 92.5805 14.0449 92.5805 13.427V6.77528V6.74157Z"
            fill={currentColor}
          />
          <path
            d="M98.981 0.0786438H101.225V2.48314H98.981V0.0786438ZM99.0493 5.11235H101.145V17.3933H99.0493V5.11235Z"
            fill={currentColor}
          />
          <path
            d="M103.217 0H105.29V10.3146L111.121 5.11236H113.65L109.196 9.22472L114.128 17.3933H111.748L107.625 10.4382L105.29 12.5056V17.4045H103.217V0Z"
            fill={currentColor}
          />
          <path
            d="M119.151 7.8764C118.581 7.8764 118.057 7.78652 117.59 7.60674C117.112 7.42697 116.713 7.16854 116.372 6.82022C116.03 6.48315 115.768 6.06742 115.586 5.58427C115.404 5.10112 115.312 4.55056 115.312 3.94382C115.312 3.33708 115.415 2.78652 115.609 2.30337C115.802 1.82022 116.076 1.40449 116.429 1.06742C116.782 0.730337 117.192 0.460674 117.647 0.280899C118.114 0.0898876 118.615 0 119.151 0C119.686 0 120.255 0.0898876 120.734 0.269663C121.212 0.449438 121.611 0.719101 121.941 1.05618C122.271 1.39326 122.533 1.80899 122.715 2.29213C122.897 2.77528 122.989 3.32584 122.989 3.93258C122.989 4.53933 122.886 5.08989 122.693 5.57303C122.499 6.05618 122.226 6.47191 121.872 6.80899C121.519 7.14607 121.109 7.41573 120.643 7.59551C120.176 7.77528 119.674 7.86517 119.139 7.86517L119.151 7.8764ZM119.139 7.02247C119.993 7.02247 120.688 6.75281 121.223 6.22472C121.759 5.68539 122.032 4.93258 122.032 3.94382C122.032 2.95506 121.759 2.20225 121.223 1.66292C120.688 1.1236 119.993 0.865169 119.139 0.865169C118.285 0.865169 117.602 1.13483 117.078 1.66292C116.554 2.20225 116.292 2.95506 116.292 3.94382C116.292 4.93258 116.554 5.68539 117.078 6.22472C117.602 6.76404 118.285 7.02247 119.139 7.02247ZM117.67 1.98876H119.094C119.435 1.98876 119.72 2.02247 119.925 2.08989C120.13 2.1573 120.301 2.24719 120.415 2.34831C120.529 2.44944 120.608 2.57303 120.654 2.70786C120.699 2.8427 120.722 2.98876 120.722 3.13483C120.722 3.40449 120.677 3.61798 120.586 3.78652C120.494 3.95506 120.335 4.07865 120.096 4.17978L120.904 5.75281H119.948L119.242 4.37079H118.536V5.75281H117.67V1.98876ZM119.207 3.62921C119.526 3.62921 119.72 3.58427 119.777 3.48315C119.834 3.38202 119.868 3.26966 119.868 3.13483C119.868 3 119.823 2.92135 119.743 2.83146C119.652 2.74157 119.435 2.69663 119.094 2.69663H118.536V3.62921H119.196H119.207Z"
            fill={currentColor}
          />
        </g>
        <defs>
          <clipPath id="clip0_766_205">
            <rect width="123" height="22" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </>
  )
}
