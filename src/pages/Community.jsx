import React from 'react'
import './css/community.css'
import pic1 from '../assets/pic-1.png'
import pic2 from '../assets/pic-2.png'
import pic3 from '../assets/pic-3.png'
import pic4 from '../assets/pic-4.png'
import pic5 from '../assets/pic-5.png'
import pic6 from '../assets/pic-6.png'
import pic7 from '../assets/pic-7.png'
import wizardImg from '../assets/wizard.svg'
// this is a react package for dynamically changing the title of a page
import { Helmet } from 'react-helmet'

export default function Community({ title }) {
    return (
        <div>
            {/* title tag changing depending on route */}
            <Helmet>
                <title> {title} </title>
            </Helmet>
            <div className="MuiBox-root css-7e8o1j-container e1de0imv0" id="community-container">



            </div>
            <div className="MuiBox-root css-14i99rr e1de0imv0">
                <div className="MuiContainer-root MuiContainer-maxWidthLg css-k3sl3m e1de0imv0">
                    <div className="MuiStack-root css-1oocj0i e1de0imv0">
                        <p className="MuiTypography-root MuiTypography-body1 css-1d9tm4p e1de0imv0">
                            All Events
                        </p>
                        <div className="MuiStack-root css-1j610d3 e1de0imv0">
                            <div className="MuiInputBase-root MuiInput-root MuiInputBase-colorPrimary e1de0imv0 css-t0wqey-root e1de0imv0">
                                <div tabindex="0" role="button" aria-expanded="false" aria-haspopup="listbox"
                                    className="MuiSelect-select MuiSelect-standard MuiInputBase-input MuiInput-input e1de0imv0 css-1q12ur3-select e1de0imv0">
                                    <div className="MuiStack-root css-1iwoqsn e1de0imv0">
                                        <p className="MuiTypography-root MuiTypography-body1 css-hnxnij e1de0imv0">
                                            <svg width="24" height="21" viewBox="0 0 24 21" fill="none" xmlns="http://www.w3.org/2000/svg"
                                                className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-tj65am e1de0imv0" focusable="false"
                                                aria-hidden="true">
                                                <path fill="none" d="M5.07159 17.2857V19.9999H22.8049V2.35709H5.07159V6.42852H22.8049"
                                                    stroke="#101010" stroke-width="1.28428" stroke-miterlimit="10" stroke-linecap="round"
                                                    stroke-linejoin="round"></path>
                                                <path d="M9.18795 0.999949V3.71423" stroke="#101010" stroke-width="1.28428" stroke-miterlimit="10"
                                                    stroke-linecap="round" stroke-linejoin="round"></path>
                                                <path d="M18.7334 0.999949V3.71423" stroke="#101010" stroke-width="1.28428" stroke-miterlimit="10"
                                                    stroke-linecap="round" stroke-linejoin="round"></path>
                                                <path d="M13.9382 0.999949V3.71423" stroke="#101010" stroke-width="1.28428" stroke-miterlimit="10"
                                                    stroke-linecap="round" stroke-linejoin="round"></path>
                                                <path fill="none"
                                                    d="M5.07143 6.42857C5.07143 13.8929 1 17.2857 1 17.2857H18.7333C18.7333 17.2857 22.8047 13.8929 22.8047 6.42857"
                                                    stroke="#101010" stroke-width="1.28428" stroke-miterlimit="10" stroke-linecap="round"
                                                    stroke-linejoin="round"></path>
                                            </svg>All time
                                        </p>
                                    </div>
                                </div>
                                <input aria-invalid="false" aria-hidden="true" tabindex="-1"
                                    className="MuiSelect-nativeInput css-1k3x8v3 e1de0imv0" value="All time" /><svg width="14" height="8"
                                        viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg"
                                        className="MuiSelect-icon MuiSelect-iconStandard css-i8gbzu-icon e1de0imv0">
                                    <path
                                        d="M8.31172 7.5L5.68828 7.5L3.20406e-07 0.5L2.62031 0.500001L7.02504 5.92923C8.50894 4.10606 9.74553 2.32317 11.3766 0.500001L14 0.500002C11.8242 2.83333 10.4875 5.16667 8.31172 7.5Z"
                                        fill="currentColor"></path>
                                </svg>
                            </div>
                            <div className="MuiInputBase-root MuiInput-root MuiInputBase-colorPrimary e1de0imv0 css-1xcq6l7-root e1de0imv0 !min-w-0 ">
                                <div tabindex="0" role="button" aria-expanded="false" aria-haspopup="listbox"
                                    className="MuiSelect-select MuiSelect-standard MuiInputBase-input MuiInput-input e1de0imv0 css-1q12ur3-select e1de0imv0">
                                    <div className="MuiStack-root css-1iwoqsn e1de0imv0">
                                        <p className="MuiTypography-root MuiTypography-body1 css-hnxnij e1de0imv0">
                                            <svg width="20" height="23" viewBox="0 0 20 23" fill="none" xmlns="http://www.w3.org/2000/svg"
                                                className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-tj65am e1de0imv0" focusable="false"
                                                aria-hidden="true">
                                                <path fill="none"
                                                    d="M10.8935 21.5171L10.8936 21.5172L10.9007 21.5112L10.9072 21.5057C11.1078 21.3374 12.9829 19.764 14.8235 17.5002C16.6609 15.2404 18.5898 12.1419 18.5898 8.99043C18.5898 4.47855 14.6768 0.894897 9.98263 0.894897C5.28848 0.894897 1.37549 4.47855 1.37549 8.99043C1.37549 12.1418 3.30426 15.2419 5.14169 17.5026C6.9779 19.7618 8.84865 21.3337 9.06406 21.5108C9.34715 21.753 9.68722 21.8393 9.98263 21.8393C10.3029 21.8393 10.6304 21.7326 10.8935 21.5171ZM9.98263 12.238C7.93605 12.238 6.36835 10.7056 6.36835 8.93739C6.36835 7.16914 7.93605 5.63674 9.98263 5.63674C12.0292 5.63674 13.5969 7.16914 13.5969 8.93739C13.5969 10.7056 12.0292 12.238 9.98263 12.238Z"
                                                    stroke="#101010" stroke-width="1.5" stroke-miterlimit="10"></path>
                                            </svg>All regions
                                        </p>
                                    </div>
                                </div>
                                <input aria-invalid="false" aria-hidden="true" tabindex="-1"
                                    className="MuiSelect-nativeInput css-1k3x8v3 e1de0imv0" value="All regions" /><svg width="14" height="8"
                                        viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg"
                                        className="MuiSelect-icon MuiSelect-iconStandard css-i8gbzu-icon e1de0imv0">
                                    <path
                                        d="M8.31172 7.5L5.68828 7.5L3.20406e-07 0.5L2.62031 0.500001L7.02504 5.92923C8.50894 4.10606 9.74553 2.32317 11.3766 0.500001L14 0.500002C11.8242 2.83333 10.4875 5.16667 8.31172 7.5Z"
                                        fill="currentColor"></path>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="MuiBox-root css-0 e1de0imv0">
                        <div className="MuiBox-root css-sjg3m1-flex e1de0imv0"
                            style={{
                                opacity: 1
                            }}>
                            <div className="MuiBox-root css-y0g3m5-flexItem e1de0imv0"
                                style={{
                                    opacity: 1,
                                    transform: 'translateY(0px) rotateY(0deg) translateZ(0px)'
                                }}>
                                <a className="MuiTypography-root MuiTypography-inherit MuiLink-root MuiLink-underlineNone e1de0imv0 e1de0imv0 css-1cwcwi7 e1de0imv0"
                                    rel="noopener noreferrer" target="_blank" href="https://lu.ma/aq2x2u07">
                                    <div
                                        className="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation0 MuiCard-root e1de0imv0 css-odyyue-card e1de0imv0"
                                        region="Asia">
                                        <img alt="Event cover" src={pic1}
                                            className="css-tg5y7g-cover" />
                                        <div className="MuiStack-root css-p27s4m e1de0imv0">
                                            <p className="MuiTypography-root MuiTypography-body1 css-13a99cs e1de0imv0">
                                                <svg width="24" height="21" viewBox="0 0 24 21" fill="none" xmlns="http://www.w3.org/2000/svg"
                                                    className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-1bm6kj7 e1de0imv0" focusable="false"
                                                    aria-hidden="true">
                                                    <path fill="none" d="M5.07159 17.2857V19.9999H22.8049V2.35709H5.07159V6.42852H22.8049"
                                                        stroke="#101010" stroke-width="1.28428" stroke-miterlimit="10" stroke-linecap="round"
                                                        stroke-linejoin="round"></path>
                                                    <path d="M9.18795 0.999949V3.71423" stroke="#101010" stroke-width="1.28428"
                                                        stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
                                                    <path d="M18.7334 0.999949V3.71423" stroke="#101010" stroke-width="1.28428"
                                                        stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
                                                    <path d="M13.9382 0.999949V3.71423" stroke="#101010" stroke-width="1.28428"
                                                        stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
                                                    <path fill="none"
                                                        d="M5.07143 6.42857C5.07143 13.8929 1 17.2857 1 17.2857H18.7333C18.7333 17.2857 22.8047 13.8929 22.8047 6.42857"
                                                        stroke="#101010" stroke-width="1.28428" stroke-miterlimit="10" stroke-linecap="round"
                                                        stroke-linejoin="round"></path>
                                                </svg>September 4, 2024
                                            </p>
                                            <p className="MuiTypography-root MuiTypography-body1 css-13a99cs e1de0imv0">
                                                <svg width="20" height="23" viewBox="0 0 20 23" fill="none" xmlns="http://www.w3.org/2000/svg"
                                                    className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-1bm6kj7 e1de0imv0" focusable="false"
                                                    aria-hidden="true">
                                                    <path fill="none"
                                                        d="M10.8935 21.5171L10.8936 21.5172L10.9007 21.5112L10.9072 21.5057C11.1078 21.3374 12.9829 19.764 14.8235 17.5002C16.6609 15.2404 18.5898 12.1419 18.5898 8.99043C18.5898 4.47855 14.6768 0.894897 9.98263 0.894897C5.28848 0.894897 1.37549 4.47855 1.37549 8.99043C1.37549 12.1418 3.30426 15.2419 5.14169 17.5026C6.9779 19.7618 8.84865 21.3337 9.06406 21.5108C9.34715 21.753 9.68722 21.8393 9.98263 21.8393C10.3029 21.8393 10.6304 21.7326 10.8935 21.5171ZM9.98263 12.238C7.93605 12.238 6.36835 10.7056 6.36835 8.93739C6.36835 7.16914 7.93605 5.63674 9.98263 5.63674C12.0292 5.63674 13.5969 7.16914 13.5969 8.93739C13.5969 10.7056 12.0292 12.238 9.98263 12.238Z"
                                                        stroke="#101010" stroke-width="1.5" stroke-miterlimit="10"></path>
                                                </svg>Seoul, Korea
                                            </p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="MuiBox-root css-y0g3m5-flexItem e1de0imv0"
                                style={{
                                    opacity: 1,
                                    transform: 'translateY(0px) rotateY(0deg) translateZ(0px)'
                                }}>
                                <a className="MuiTypography-root MuiTypography-inherit MuiLink-root MuiLink-underlineNone e1de0imv0 e1de0imv0 css-1cwcwi7 e1de0imv0"
                                    rel="noopener noreferrer" target="_blank"
                                    href="https://taikai.network/ethargentina/hackathons/level-up-argentina-2024/overview">
                                    <div
                                        className="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation0 MuiCard-root e1de0imv0 css-odyyue-card e1de0imv0"
                                        region="South America">
                                        <img alt="Event cover" src={pic2}
                                            className="css-tg5y7g-cover" />
                                        <div className="MuiStack-root css-p27s4m e1de0imv0">
                                            <p className="MuiTypography-root MuiTypography-body1 css-13a99cs e1de0imv0">
                                                <svg width="24" height="21" viewBox="0 0 24 21" fill="none" xmlns="http://www.w3.org/2000/svg"
                                                    className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-1bm6kj7 e1de0imv0" focusable="false"
                                                    aria-hidden="true">
                                                    <path fill="none" d="M5.07159 17.2857V19.9999H22.8049V2.35709H5.07159V6.42852H22.8049"
                                                        stroke="#101010" stroke-width="1.28428" stroke-miterlimit="10" stroke-linecap="round"
                                                        stroke-linejoin="round"></path>
                                                    <path d="M9.18795 0.999949V3.71423" stroke="#101010" stroke-width="1.28428"
                                                        stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
                                                    <path d="M18.7334 0.999949V3.71423" stroke="#101010" stroke-width="1.28428"
                                                        stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
                                                    <path d="M13.9382 0.999949V3.71423" stroke="#101010" stroke-width="1.28428"
                                                        stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
                                                    <path fill="none"
                                                        d="M5.07143 6.42857C5.07143 13.8929 1 17.2857 1 17.2857H18.7333C18.7333 17.2857 22.8047 13.8929 22.8047 6.42857"
                                                        stroke="#101010" stroke-width="1.28428" stroke-miterlimit="10" stroke-linecap="round"
                                                        stroke-linejoin="round"></path>
                                                </svg>August 2, 2024
                                            </p>
                                            <p className="MuiTypography-root MuiTypography-body1 css-13a99cs e1de0imv0">
                                                <svg width="20" height="23" viewBox="0 0 20 23" fill="none" xmlns="http://www.w3.org/2000/svg"
                                                    className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-1bm6kj7 e1de0imv0" focusable="false"
                                                    aria-hidden="true">
                                                    <path fill="none"
                                                        d="M10.8935 21.5171L10.8936 21.5172L10.9007 21.5112L10.9072 21.5057C11.1078 21.3374 12.9829 19.764 14.8235 17.5002C16.6609 15.2404 18.5898 12.1419 18.5898 8.99043C18.5898 4.47855 14.6768 0.894897 9.98263 0.894897C5.28848 0.894897 1.37549 4.47855 1.37549 8.99043C1.37549 12.1418 3.30426 15.2419 5.14169 17.5026C6.9779 19.7618 8.84865 21.3337 9.06406 21.5108C9.34715 21.753 9.68722 21.8393 9.98263 21.8393C10.3029 21.8393 10.6304 21.7326 10.8935 21.5171ZM9.98263 12.238C7.93605 12.238 6.36835 10.7056 6.36835 8.93739C6.36835 7.16914 7.93605 5.63674 9.98263 5.63674C12.0292 5.63674 13.5969 7.16914 13.5969 8.93739C13.5969 10.7056 12.0292 12.238 9.98263 12.238Z"
                                                        stroke="#101010" stroke-width="1.5" stroke-miterlimit="10"></path>
                                                </svg>Buenos Aires, Argentina
                                            </p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="MuiBox-root css-y0g3m5-flexItem e1de0imv0"
                                style={{
                                    opacity: 1,
                                    transform: 'translateY(0px) rotateY(0deg) translateZ(0px)'
                                }}>
                                <a className="MuiTypography-root MuiTypography-inherit MuiLink-root MuiLink-underlineNone e1de0imv0 e1de0imv0 css-1cwcwi7 e1de0imv0"
                                    rel="noopener noreferrer" target="_blank" href="https://lu.ma/ssmbpk8r">
                                    <div
                                        className="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation0 MuiCard-root e1de0imv0 css-odyyue-card e1de0imv0"
                                        region="Europe">
                                        <img alt="Event cover" src={pic3}
                                            className="css-tg5y7g-cover" />
                                        <div className="MuiStack-root css-p27s4m e1de0imv0">
                                            <p className="MuiTypography-root MuiTypography-body1 css-13a99cs e1de0imv0">
                                                <svg width="24" height="21" viewBox="0 0 24 21" fill="none" xmlns="http://www.w3.org/2000/svg"
                                                    className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-1bm6kj7 e1de0imv0" focusable="false"
                                                    aria-hidden="true">
                                                    <path fill="none" d="M5.07159 17.2857V19.9999H22.8049V2.35709H5.07159V6.42852H22.8049"
                                                        stroke="#101010" stroke-width="1.28428" stroke-miterlimit="10" stroke-linecap="round"
                                                        stroke-linejoin="round"></path>
                                                    <path d="M9.18795 0.999949V3.71423" stroke="#101010" stroke-width="1.28428"
                                                        stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
                                                    <path d="M18.7334 0.999949V3.71423" stroke="#101010" stroke-width="1.28428"
                                                        stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
                                                    <path d="M13.9382 0.999949V3.71423" stroke="#101010" stroke-width="1.28428"
                                                        stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
                                                    <path fill="none"
                                                        d="M5.07143 6.42857C5.07143 13.8929 1 17.2857 1 17.2857H18.7333C18.7333 17.2857 22.8047 13.8929 22.8047 6.42857"
                                                        stroke="#101010" stroke-width="1.28428" stroke-miterlimit="10" stroke-linecap="round"
                                                        stroke-linejoin="round"></path>
                                                </svg>July 9, 2024
                                            </p>
                                            <p className="MuiTypography-root MuiTypography-body1 css-13a99cs e1de0imv0">
                                                <svg width="20" height="23" viewBox="0 0 20 23" fill="none" xmlns="http://www.w3.org/2000/svg"
                                                    className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-1bm6kj7 e1de0imv0" focusable="false"
                                                    aria-hidden="true">
                                                    <path fill="none"
                                                        d="M10.8935 21.5171L10.8936 21.5172L10.9007 21.5112L10.9072 21.5057C11.1078 21.3374 12.9829 19.764 14.8235 17.5002C16.6609 15.2404 18.5898 12.1419 18.5898 8.99043C18.5898 4.47855 14.6768 0.894897 9.98263 0.894897C5.28848 0.894897 1.37549 4.47855 1.37549 8.99043C1.37549 12.1418 3.30426 15.2419 5.14169 17.5026C6.9779 19.7618 8.84865 21.3337 9.06406 21.5108C9.34715 21.753 9.68722 21.8393 9.98263 21.8393C10.3029 21.8393 10.6304 21.7326 10.8935 21.5171ZM9.98263 12.238C7.93605 12.238 6.36835 10.7056 6.36835 8.93739C6.36835 7.16914 7.93605 5.63674 9.98263 5.63674C12.0292 5.63674 13.5969 7.16914 13.5969 8.93739C13.5969 10.7056 12.0292 12.238 9.98263 12.238Z"
                                                        stroke="#101010" stroke-width="1.5" stroke-miterlimit="10"></path>
                                                </svg>Brussels, Belgium
                                            </p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="MuiBox-root css-y0g3m5-flexItem e1de0imv0"
                                style={{
                                    opacity: 1,
                                    transform: 'translateY(0px) rotateY(0deg) translateZ(0px)'
                                }}>
                                <a className="MuiTypography-root MuiTypography-inherit MuiLink-root MuiLink-underlineNone e1de0imv0 e1de0imv0 css-1cwcwi7 e1de0imv0"
                                    rel="noopener noreferrer" target="_blank" href="https://lu.ma/dtwr61ox">
                                    <div
                                        className="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation0 MuiCard-root e1de0imv0 css-odyyue-card e1de0imv0"
                                        region="Europe">
                                        <img alt="Event cover" src={pic4}
                                            className="css-tg5y7g-cover" />
                                        <div className="MuiStack-root css-p27s4m e1de0imv0">
                                            <p className="MuiTypography-root MuiTypography-body1 css-13a99cs e1de0imv0">
                                                <svg width="24" height="21" viewBox="0 0 24 21" fill="none" xmlns="http://www.w3.org/2000/svg"
                                                    className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-1bm6kj7 e1de0imv0" focusable="false"
                                                    aria-hidden="true">
                                                    <path fill="none" d="M5.07159 17.2857V19.9999H22.8049V2.35709H5.07159V6.42852H22.8049"
                                                        stroke="#101010" stroke-width="1.28428" stroke-miterlimit="10" stroke-linecap="round"
                                                        stroke-linejoin="round"></path>
                                                    <path d="M9.18795 0.999949V3.71423" stroke="#101010" stroke-width="1.28428"
                                                        stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
                                                    <path d="M18.7334 0.999949V3.71423" stroke="#101010" stroke-width="1.28428"
                                                        stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
                                                    <path d="M13.9382 0.999949V3.71423" stroke="#101010" stroke-width="1.28428"
                                                        stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
                                                    <path fill="none"
                                                        d="M5.07143 6.42857C5.07143 13.8929 1 17.2857 1 17.2857H18.7333C18.7333 17.2857 22.8047 13.8929 22.8047 6.42857"
                                                        stroke="#101010" stroke-width="1.28428" stroke-miterlimit="10" stroke-linecap="round"
                                                        stroke-linejoin="round"></path>
                                                </svg>May 22, 2024
                                            </p>
                                            <p className="MuiTypography-root MuiTypography-body1 css-13a99cs e1de0imv0">
                                                <svg width="20" height="23" viewBox="0 0 20 23" fill="none" xmlns="http://www.w3.org/2000/svg"
                                                    className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-1bm6kj7 e1de0imv0" focusable="false"
                                                    aria-hidden="true">
                                                    <path fill="none"
                                                        d="M10.8935 21.5171L10.8936 21.5172L10.9007 21.5112L10.9072 21.5057C11.1078 21.3374 12.9829 19.764 14.8235 17.5002C16.6609 15.2404 18.5898 12.1419 18.5898 8.99043C18.5898 4.47855 14.6768 0.894897 9.98263 0.894897C5.28848 0.894897 1.37549 4.47855 1.37549 8.99043C1.37549 12.1418 3.30426 15.2419 5.14169 17.5026C6.9779 19.7618 8.84865 21.3337 9.06406 21.5108C9.34715 21.753 9.68722 21.8393 9.98263 21.8393C10.3029 21.8393 10.6304 21.7326 10.8935 21.5171ZM9.98263 12.238C7.93605 12.238 6.36835 10.7056 6.36835 8.93739C6.36835 7.16914 7.93605 5.63674 9.98263 5.63674C12.0292 5.63674 13.5969 7.16914 13.5969 8.93739C13.5969 10.7056 12.0292 12.238 9.98263 12.238Z"
                                                        stroke="#101010" stroke-width="1.5" stroke-miterlimit="10"></path>
                                                </svg>Berlin, Germany
                                            </p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="MuiBox-root css-y0g3m5-flexItem e1de0imv0"
                                style={{
                                    opacity: 1,
                                    transform: 'translateY(0px) rotateY(0deg) translateZ(0px)'
                                }}>
                                <a className="MuiTypography-root MuiTypography-inherit MuiLink-root MuiLink-underlineNone e1de0imv0 e1de0imv0 css-1cwcwi7 e1de0imv0"
                                    rel="noopener noreferrer" target="_blank" href="https://lu.ma/scrollupistanbul">
                                    <div
                                        className="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation0 MuiCard-root e1de0imv0 css-odyyue-card e1de0imv0"
                                        region="Middle East">
                                        <img alt="Event cover" src={pic5}
                                            className="css-tg5y7g-cover" />
                                        <div className="MuiStack-root css-p27s4m e1de0imv0">
                                            <p className="MuiTypography-root MuiTypography-body1 css-13a99cs e1de0imv0">
                                                <svg width="24" height="21" viewBox="0 0 24 21" fill="none" xmlns="http://www.w3.org/2000/svg"
                                                    className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-1bm6kj7 e1de0imv0" focusable="false"
                                                    aria-hidden="true">
                                                    <path fill="none" d="M5.07159 17.2857V19.9999H22.8049V2.35709H5.07159V6.42852H22.8049"
                                                        stroke="#101010" stroke-width="1.28428" stroke-miterlimit="10" stroke-linecap="round"
                                                        stroke-linejoin="round"></path>
                                                    <path d="M9.18795 0.999949V3.71423" stroke="#101010" stroke-width="1.28428"
                                                        stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
                                                    <path d="M18.7334 0.999949V3.71423" stroke="#101010" stroke-width="1.28428"
                                                        stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
                                                    <path d="M13.9382 0.999949V3.71423" stroke="#101010" stroke-width="1.28428"
                                                        stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
                                                    <path fill="none"
                                                        d="M5.07143 6.42857C5.07143 13.8929 1 17.2857 1 17.2857H18.7333C18.7333 17.2857 22.8047 13.8929 22.8047 6.42857"
                                                        stroke="#101010" stroke-width="1.28428" stroke-miterlimit="10" stroke-linecap="round"
                                                        stroke-linejoin="round"></path>
                                                </svg>May 2, 2024
                                            </p>
                                            <p className="MuiTypography-root MuiTypography-body1 css-13a99cs e1de0imv0">
                                                <svg width="20" height="23" viewBox="0 0 20 23" fill="none" xmlns="http://www.w3.org/2000/svg"
                                                    className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-1bm6kj7 e1de0imv0" focusable="false"
                                                    aria-hidden="true">
                                                    <path fill="none"
                                                        d="M10.8935 21.5171L10.8936 21.5172L10.9007 21.5112L10.9072 21.5057C11.1078 21.3374 12.9829 19.764 14.8235 17.5002C16.6609 15.2404 18.5898 12.1419 18.5898 8.99043C18.5898 4.47855 14.6768 0.894897 9.98263 0.894897C5.28848 0.894897 1.37549 4.47855 1.37549 8.99043C1.37549 12.1418 3.30426 15.2419 5.14169 17.5026C6.9779 19.7618 8.84865 21.3337 9.06406 21.5108C9.34715 21.753 9.68722 21.8393 9.98263 21.8393C10.3029 21.8393 10.6304 21.7326 10.8935 21.5171ZM9.98263 12.238C7.93605 12.238 6.36835 10.7056 6.36835 8.93739C6.36835 7.16914 7.93605 5.63674 9.98263 5.63674C12.0292 5.63674 13.5969 7.16914 13.5969 8.93739C13.5969 10.7056 12.0292 12.238 9.98263 12.238Z"
                                                        stroke="#101010" stroke-width="1.5" stroke-miterlimit="10"></path>
                                                </svg>Istanbul, Turkey
                                            </p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="MuiBox-root css-y0g3m5-flexItem e1de0imv0"
                                style={{
                                    opacity: 1,
                                    transform: 'translateY(0px) rotateY(0deg) translateZ(0px)'
                                }}>
                                <a className="MuiTypography-root MuiTypography-inherit MuiLink-root MuiLink-underlineNone e1de0imv0 e1de0imv0 css-1cwcwi7 e1de0imv0"
                                    rel="noopener noreferrer" target="_blank" href="https://lu.ma/jyi4g6g7">
                                    <div
                                        className="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation0 MuiCard-root e1de0imv0 css-odyyue-card e1de0imv0"
                                        region="South America">
                                        <img alt="Event cover" src="https://community.scroll.cat/i/06d2b60411a4792f85b97f50dc232eee"
                                            className="css-tg5y7g-cover" />
                                        <div className="MuiStack-root css-p27s4m e1de0imv0">
                                            <p className="MuiTypography-root MuiTypography-body1 css-13a99cs e1de0imv0">
                                                <svg width="24" height="21" viewBox="0 0 24 21" fill="none" xmlns="http://www.w3.org/2000/svg"
                                                    className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-1bm6kj7 e1de0imv0" focusable="false"
                                                    aria-hidden="true">
                                                    <path fill="none" d="M5.07159 17.2857V19.9999H22.8049V2.35709H5.07159V6.42852H22.8049"
                                                        stroke="#101010" stroke-width="1.28428" stroke-miterlimit="10" stroke-linecap="round"
                                                        stroke-linejoin="round"></path>
                                                    <path d="M9.18795 0.999949V3.71423" stroke="#101010" stroke-width="1.28428"
                                                        stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
                                                    <path d="M18.7334 0.999949V3.71423" stroke="#101010" stroke-width="1.28428"
                                                        stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
                                                    <path d="M13.9382 0.999949V3.71423" stroke="#101010" stroke-width="1.28428"
                                                        stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
                                                    <path fill="none"
                                                        d="M5.07143 6.42857C5.07143 13.8929 1 17.2857 1 17.2857H18.7333C18.7333 17.2857 22.8047 13.8929 22.8047 6.42857"
                                                        stroke="#101010" stroke-width="1.28428" stroke-miterlimit="10" stroke-linecap="round"
                                                        stroke-linejoin="round"></path>
                                                </svg>March 21, 2024
                                            </p>
                                            <p className="MuiTypography-root MuiTypography-body1 css-13a99cs e1de0imv0">
                                                <svg width="20" height="23" viewBox="0 0 20 23" fill="none" xmlns="http://www.w3.org/2000/svg"
                                                    className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-1bm6kj7 e1de0imv0" focusable="false"
                                                    aria-hidden="true">
                                                    <path fill="none"
                                                        d="M10.8935 21.5171L10.8936 21.5172L10.9007 21.5112L10.9072 21.5057C11.1078 21.3374 12.9829 19.764 14.8235 17.5002C16.6609 15.2404 18.5898 12.1419 18.5898 8.99043C18.5898 4.47855 14.6768 0.894897 9.98263 0.894897C5.28848 0.894897 1.37549 4.47855 1.37549 8.99043C1.37549 12.1418 3.30426 15.2419 5.14169 17.5026C6.9779 19.7618 8.84865 21.3337 9.06406 21.5108C9.34715 21.753 9.68722 21.8393 9.98263 21.8393C10.3029 21.8393 10.6304 21.7326 10.8935 21.5171ZM9.98263 12.238C7.93605 12.238 6.36835 10.7056 6.36835 8.93739C6.36835 7.16914 7.93605 5.63674 9.98263 5.63674C12.0292 5.63674 13.5969 7.16914 13.5969 8.93739C13.5969 10.7056 12.0292 12.238 9.98263 12.238Z"
                                                        stroke="#101010" stroke-width="1.5" stroke-miterlimit="10"></path>
                                                </svg>Rio de Janeiro, Brazil
                                            </p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="MuiBox-root css-y0g3m5-flexItem e1de0imv0"
                                style={{
                                    opacity: 1,
                                    transform: 'translateY(0px) rotateY(0deg) translateZ(0px)'
                                }}>
                                <a className="MuiTypography-root MuiTypography-inherit MuiLink-root MuiLink-underlineNone e1de0imv0 e1de0imv0 css-1cwcwi7 e1de0imv0"
                                    rel="noopener noreferrer" target="_blank" href="https://lu.ma/81jldvbq">
                                    <div
                                        className="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation0 MuiCard-root e1de0imv0 css-odyyue-card e1de0imv0"
                                        region="Central America">
                                        <img alt="Event cover" src="https://community.scroll.cat/i/0170258861bde151026d24f6c44f32bd"
                                            className="css-tg5y7g-cover" />
                                        <div className="MuiStack-root css-p27s4m e1de0imv0">
                                            <p className="MuiTypography-root MuiTypography-body1 css-13a99cs e1de0imv0">
                                                <svg width="24" height="21" viewBox="0 0 24 21" fill="none" xmlns="http://www.w3.org/2000/svg"
                                                    className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-1bm6kj7 e1de0imv0" focusable="false"
                                                    aria-hidden="true">
                                                    <path fill="none" d="M5.07159 17.2857V19.9999H22.8049V2.35709H5.07159V6.42852H22.8049"
                                                        stroke="#101010" stroke-width="1.28428" stroke-miterlimit="10" stroke-linecap="round"
                                                        stroke-linejoin="round"></path>
                                                    <path d="M9.18795 0.999949V3.71423" stroke="#101010" stroke-width="1.28428"
                                                        stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
                                                    <path d="M18.7334 0.999949V3.71423" stroke="#101010" stroke-width="1.28428"
                                                        stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
                                                    <path d="M13.9382 0.999949V3.71423" stroke="#101010" stroke-width="1.28428"
                                                        stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
                                                    <path fill="none"
                                                        d="M5.07143 6.42857C5.07143 13.8929 1 17.2857 1 17.2857H18.7333C18.7333 17.2857 22.8047 13.8929 22.8047 6.42857"
                                                        stroke="#101010" stroke-width="1.28428" stroke-miterlimit="10" stroke-linecap="round"
                                                        stroke-linejoin="round"></path>
                                                </svg>March 12, 2024
                                            </p>
                                            <p className="MuiTypography-root MuiTypography-body1 css-13a99cs e1de0imv0">
                                                <svg width="20" height="23" viewBox="0 0 20 23" fill="none" xmlns="http://www.w3.org/2000/svg"
                                                    className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-1bm6kj7 e1de0imv0" focusable="false"
                                                    aria-hidden="true">
                                                    <path fill="none"
                                                        d="M10.8935 21.5171L10.8936 21.5172L10.9007 21.5112L10.9072 21.5057C11.1078 21.3374 12.9829 19.764 14.8235 17.5002C16.6609 15.2404 18.5898 12.1419 18.5898 8.99043C18.5898 4.47855 14.6768 0.894897 9.98263 0.894897C5.28848 0.894897 1.37549 4.47855 1.37549 8.99043C1.37549 12.1418 3.30426 15.2419 5.14169 17.5026C6.9779 19.7618 8.84865 21.3337 9.06406 21.5108C9.34715 21.753 9.68722 21.8393 9.98263 21.8393C10.3029 21.8393 10.6304 21.7326 10.8935 21.5171ZM9.98263 12.238C7.93605 12.238 6.36835 10.7056 6.36835 8.93739C6.36835 7.16914 7.93605 5.63674 9.98263 5.63674C12.0292 5.63674 13.5969 7.16914 13.5969 8.93739C13.5969 10.7056 12.0292 12.238 9.98263 12.238Z"
                                                        stroke="#101010" stroke-width="1.5" stroke-miterlimit="10"></path>
                                                </svg>San Pedro Sula, Honduras
                                            </p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="MuiBox-root css-y0g3m5-flexItem e1de0imv0"
                                style={{
                                    opacity: 1,
                                    transform: 'translateY(0px) rotateY(0deg) translateZ(0px)'
                                }}>
                                <a className="MuiTypography-root MuiTypography-inherit MuiLink-root MuiLink-underlineNone e1de0imv0 e1de0imv0 css-1cwcwi7 e1de0imv0"
                                    rel="noopener noreferrer" target="_blank"
                                    href="https://app.unlock-protocol.com/event/zk-cafe-connect-fuel-up-recharge">
                                    <div
                                        className="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation0 MuiCard-root e1de0imv0 css-odyyue-card e1de0imv0"
                                        region="Central America">
                                        <img alt="Event cover" src={pic6}
                                            className="css-tg5y7g-cover" />
                                        <div className="MuiStack-root css-p27s4m e1de0imv0">
                                            <p className="MuiTypography-root MuiTypography-body1 css-13a99cs e1de0imv0">
                                                <svg width="24" height="21" viewBox="0 0 24 21" fill="none" xmlns="http://www.w3.org/2000/svg"
                                                    className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-1bm6kj7 e1de0imv0" focusable="false"
                                                    aria-hidden="true">
                                                    <path fill="none" d="M5.07159 17.2857V19.9999H22.8049V2.35709H5.07159V6.42852H22.8049"
                                                        stroke="#101010" stroke-width="1.28428" stroke-miterlimit="10" stroke-linecap="round"
                                                        stroke-linejoin="round"></path>
                                                    <path d="M9.18795 0.999949V3.71423" stroke="#101010" stroke-width="1.28428"
                                                        stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
                                                    <path d="M18.7334 0.999949V3.71423" stroke="#101010" stroke-width="1.28428"
                                                        stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
                                                    <path d="M13.9382 0.999949V3.71423" stroke="#101010" stroke-width="1.28428"
                                                        stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
                                                    <path fill="none"
                                                        d="M5.07143 6.42857C5.07143 13.8929 1 17.2857 1 17.2857H18.7333C18.7333 17.2857 22.8047 13.8929 22.8047 6.42857"
                                                        stroke="#101010" stroke-width="1.28428" stroke-miterlimit="10" stroke-linecap="round"
                                                        stroke-linejoin="round"></path>
                                                </svg>February 27, 2024
                                            </p>
                                            <p className="MuiTypography-root MuiTypography-body1 css-13a99cs e1de0imv0">
                                                <svg width="20" height="23" viewBox="0 0 20 23" fill="none" xmlns="http://www.w3.org/2000/svg"
                                                    className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-1bm6kj7 e1de0imv0" focusable="false"
                                                    aria-hidden="true">
                                                    <path fill="none"
                                                        d="M10.8935 21.5171L10.8936 21.5172L10.9007 21.5112L10.9072 21.5057C11.1078 21.3374 12.9829 19.764 14.8235 17.5002C16.6609 15.2404 18.5898 12.1419 18.5898 8.99043C18.5898 4.47855 14.6768 0.894897 9.98263 0.894897C5.28848 0.894897 1.37549 4.47855 1.37549 8.99043C1.37549 12.1418 3.30426 15.2419 5.14169 17.5026C6.9779 19.7618 8.84865 21.3337 9.06406 21.5108C9.34715 21.753 9.68722 21.8393 9.98263 21.8393C10.3029 21.8393 10.6304 21.7326 10.8935 21.5171ZM9.98263 12.238C7.93605 12.238 6.36835 10.7056 6.36835 8.93739C6.36835 7.16914 7.93605 5.63674 9.98263 5.63674C12.0292 5.63674 13.5969 7.16914 13.5969 8.93739C13.5969 10.7056 12.0292 12.238 9.98263 12.238Z"
                                                        stroke="#101010" stroke-width="1.5" stroke-miterlimit="10"></path>
                                                </svg>Denver, United States
                                            </p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="MuiBox-root css-y0g3m5-flexItem e1de0imv0"
                                style={{
                                    opacity: 1,
                                    transform: 'translateY(0px) rotateY(0deg) translateZ(0px)'
                                }}>
                                <a className="MuiTypography-root MuiTypography-inherit MuiLink-root MuiLink-underlineNone e1de0imv0 e1de0imv0 css-1cwcwi7 e1de0imv0"
                                    rel="noopener noreferrer" target="_blank" href="https://scroll.io/sticker-winners">
                                    <div
                                        className="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation0 MuiCard-root e1de0imv0 css-odyyue-card e1de0imv0"
                                        region="Pacific">
                                        <img alt="Event cover" src={pic7}
                                            className="css-tg5y7g-cover" />
                                        <div className="MuiStack-root css-p27s4m e1de0imv0">
                                            <p className="MuiTypography-root MuiTypography-body1 css-13a99cs e1de0imv0">
                                                <svg width="24" height="21" viewBox="0 0 24 21" fill="none" xmlns="http://www.w3.org/2000/svg"
                                                    className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-1bm6kj7 e1de0imv0" focusable="false"
                                                    aria-hidden="true">
                                                    <path fill="none" d="M5.07159 17.2857V19.9999H22.8049V2.35709H5.07159V6.42852H22.8049"
                                                        stroke="#101010" stroke-width="1.28428" stroke-miterlimit="10" stroke-linecap="round"
                                                        stroke-linejoin="round"></path>
                                                    <path d="M9.18795 0.999949V3.71423" stroke="#101010" stroke-width="1.28428"
                                                        stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
                                                    <path d="M18.7334 0.999949V3.71423" stroke="#101010" stroke-width="1.28428"
                                                        stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
                                                    <path d="M13.9382 0.999949V3.71423" stroke="#101010" stroke-width="1.28428"
                                                        stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
                                                    <path fill="none"
                                                        d="M5.07143 6.42857C5.07143 13.8929 1 17.2857 1 17.2857H18.7333C18.7333 17.2857 22.8047 13.8929 22.8047 6.42857"
                                                        stroke="#101010" stroke-width="1.28428" stroke-miterlimit="10" stroke-linecap="round"
                                                        stroke-linejoin="round"></path>
                                                </svg>January 31, 2024
                                            </p>
                                            <p className="MuiTypography-root MuiTypography-body1 css-13a99cs e1de0imv0">
                                                <svg width="20" height="23" viewBox="0 0 20 23" fill="none" xmlns="http://www.w3.org/2000/svg"
                                                    className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-1bm6kj7 e1de0imv0" focusable="false"
                                                    aria-hidden="true">
                                                    <path fill="none"
                                                        d="M10.8935 21.5171L10.8936 21.5172L10.9007 21.5112L10.9072 21.5057C11.1078 21.3374 12.9829 19.764 14.8235 17.5002C16.6609 15.2404 18.5898 12.1419 18.5898 8.99043C18.5898 4.47855 14.6768 0.894897 9.98263 0.894897C5.28848 0.894897 1.37549 4.47855 1.37549 8.99043C1.37549 12.1418 3.30426 15.2419 5.14169 17.5026C6.9779 19.7618 8.84865 21.3337 9.06406 21.5108C9.34715 21.753 9.68722 21.8393 9.98263 21.8393C10.3029 21.8393 10.6304 21.7326 10.8935 21.5171ZM9.98263 12.238C7.93605 12.238 6.36835 10.7056 6.36835 8.93739C6.36835 7.16914 7.93605 5.63674 9.98263 5.63674C12.0292 5.63674 13.5969 7.16914 13.5969 8.93739C13.5969 10.7056 12.0292 12.238 9.98263 12.238Z"
                                                        stroke="#101010" stroke-width="1.5" stroke-miterlimit="10"></path>
                                                </svg>Global, Global
                                            </p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="MuiBox-root css-oqwlv3-buttonBox e1de0imv0"
                                style={{
                                    opacity: 1,
                                    transform: 'translateY(0px) rotateY(0deg) translateZ(0px)'
                                }}>
                                <button
                                    className="MuiButtonBase-root MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium e1de0imv0 css-1n5299v-action-action e1de0imv0"
                                    tabindex="0" type="button" href="" target="_blank">
                                    <span className="MuiButton-startIcon MuiButton-iconSizeMedium css-1l6c7y9 e1de0imv0"><svg width="14"
                                        height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"
                                        className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-1yc6g9p e1de0imv0" focusable="false"
                                        aria-hidden="true">
                                        <g clip-path="url(#clip0_287_384)">
                                            <path
                                                d="M14 0V10.6795L12.1926 8.8721V3.05488C8.50054 6.64105 5.12622 10.5467 1.32821 14L0 12.6987C3.77279 9.24535 7.11853 5.39354 10.7854 1.83259H5.15312L3.32052 0H14Z"
                                                fill="currentColor"></path>
                                        </g>
                                    </svg></span>View more
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="MuiBox-root css-14i99rr e1de0imv0">
                <div className="MuiContainer-root MuiContainer-maxWidthLg css-n2hxjt e1de0imv0">
                    <p className="MuiTypography-root MuiTypography-body1 css-1egha00 e1de0imv0">
                        Join our community
                    </p>
                    <div className="MuiBox-root css-e9gm5-flex e1de0imv0"
                        style={{
                            opacity: 1
                        }}>
                        <div className="MuiBox-root css-1g6qzny-large e1de0imv0"
                            style={{
                                opacity: 1,
                                transform: 'translateY(0px) rotateY(0deg) translateZ(0px)'
                            }}>
                            <a className="MuiTypography-root MuiTypography-inherit MuiLink-root MuiLink-underlineNone e1de0imv0 e1de0imv0 css-1cwcwi7 e1de0imv0"
                                rel="noopener noreferrer" target="_blank"></a>
                            <div
                                className="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation0 MuiCard-root e1de0imv0 css-1wn1wft-card e1de0imv0">
                                <a className="MuiTypography-root MuiTypography-inherit MuiLink-root MuiLink-underlineNone e1de0imv0 e1de0imv0 css-1cwcwi7 e1de0imv0"
                                    rel="noopener noreferrer" target="_blank"></a>
                                <div className="MuiStack-root css-89gbqn e1de0imv0">

                                    <div className="MuiBox-root css-0 e1de0imv0">
                                        <a className="MuiTypography-root MuiTypography-inherit MuiLink-root MuiLink-underlineNone e1de0imv0 e1de0imv0 css-1cwcwi7 e1de0imv0"
                                            rel="noopener noreferrer" target="_blank">
                                            <svg width="158" height="28" viewBox="0 0 158 28"
                                                fill="none" xmlns="http://www.w3.org/2000/svg"
                                                className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-yj8uoj e1de0imv0" focusable="false"
                                                aria-hidden="true">
                                                <g clip-path="url(#clip0_5278_1948)">
                                                    <path
                                                        d="M53.5067 4.33384V20.0148H61.843C62.1269 20.0148 62.3585 20.2463 62.3585 20.5301V21.8069C62.3585 22.0907 62.1269 22.3222 61.843 22.3222H51.4301C51.1462 22.3222 50.9147 22.0907 50.9147 21.8069V4.33384C50.9147 4.05008 51.1462 3.8186 51.4301 3.8186H52.9838C53.2677 3.8186 53.4992 4.05008 53.4992 4.33384H53.5067Z"
                                                        fill="#190602"></path>
                                                    <path
                                                        d="M67.9683 21.6426C66.9225 21.0005 66.1083 20.1343 65.5257 19.0515C64.9505 17.9688 64.6592 16.7666 64.6592 15.4374C64.6592 14.1083 64.9505 12.9135 65.5257 11.8233C66.1083 10.7406 66.9225 9.87442 67.9683 9.23224C69.0141 8.59007 70.2167 8.26898 71.5837 8.26898C72.8536 8.26898 73.9741 8.5602 74.9451 9.13517C75.9162 9.71014 76.6781 10.5315 77.2234 11.5919C77.7687 12.6522 78.0377 13.8693 78.0377 15.2433C78.0377 15.6316 78.0302 15.9228 78.0078 16.1244H67.2512C67.3782 17.4088 67.8189 18.4616 68.5734 19.283C69.3278 20.1044 70.3363 20.5076 71.6061 20.5076C72.5772 20.5076 73.4064 20.2612 74.0861 19.7758C74.6613 19.3652 75.0945 18.82 75.3784 18.148C75.468 17.9315 75.6847 17.7896 75.9162 17.812L77.2683 17.9539C77.6119 17.9912 77.8136 18.3422 77.7015 18.6632C77.3131 19.731 76.6557 20.6196 75.7145 21.329C74.5941 22.1728 73.2121 22.5984 71.5762 22.5984C70.2167 22.5984 69.0141 22.2773 67.9609 21.6352L67.9683 21.6426ZM75.4979 14.168C75.3336 13.0255 74.9227 12.1071 74.2579 11.4126C73.5931 10.7107 72.6893 10.3672 71.524 10.3672C70.3587 10.3672 69.4249 10.7182 68.7004 11.4126C67.9758 12.1146 67.5201 13.033 67.3334 14.168H75.4979Z"
                                                        fill="#190602"></path>
                                                    <path
                                                        d="M82.5943 8.88127L86.5234 19.6788L90.4525 8.88127C90.5272 8.67966 90.7214 8.53778 90.9381 8.53778H92.574C92.94 8.53778 93.1865 8.90367 93.0595 9.24716L88.0622 21.9936C87.9875 22.1952 87.7933 22.3221 87.5766 22.3221H85.4702C85.2535 22.3221 85.0668 22.1952 84.9846 21.9936L79.9873 9.24716C79.8528 8.90367 80.1068 8.53778 80.4728 8.53778H82.1087C82.3254 8.53778 82.5196 8.67219 82.5943 8.88127Z"
                                                        fill="#190602"></path>
                                                    <path
                                                        d="M98.0942 21.6426C97.0484 21.0005 96.2342 20.1343 95.6515 19.0515C95.0764 17.9688 94.785 16.7666 94.785 15.4374C94.785 14.1083 95.0764 12.9135 95.6515 11.8233C96.2342 10.7406 97.0484 9.87442 98.0942 9.23224C99.1399 8.59007 100.343 8.26898 101.71 8.26898C102.979 8.26898 104.1 8.5602 105.071 9.13517C106.042 9.71014 106.804 10.5315 107.349 11.5919C107.895 12.6522 108.164 13.8693 108.164 15.2433C108.164 15.6316 108.156 15.9228 108.134 16.1244H97.3771C97.504 17.4088 97.9448 18.4616 98.6992 19.283C99.4537 20.1044 100.462 20.5076 101.732 20.5076C102.703 20.5076 103.532 20.2612 104.212 19.7758C104.787 19.3652 105.22 18.82 105.504 18.148C105.594 17.9315 105.811 17.7896 106.042 17.812L107.394 17.9539C107.738 17.9912 107.939 18.3422 107.827 18.6632C107.439 19.731 106.782 20.6196 105.84 21.329C104.72 22.1728 103.338 22.5984 101.702 22.5984C100.343 22.5984 99.14 22.2773 98.0867 21.6352L98.0942 21.6426ZM105.624 14.168C105.459 13.0255 105.049 12.1071 104.384 11.4126C103.719 10.7107 102.815 10.3672 101.65 10.3672C100.485 10.3672 99.5508 10.7182 98.8262 11.4126C98.1016 12.1146 97.646 13.033 97.4592 14.168H105.624Z"
                                                        fill="#190602"></path>
                                                    <path
                                                        d="M127.817 20.5674C126.674 19.2382 126.106 17.4461 126.106 15.206V4.29648C126.106 4.01273 126.338 3.78125 126.621 3.78125H128.153C128.437 3.78125 128.668 4.01273 128.668 4.29648V15.206C128.668 16.7666 129.019 17.9987 129.729 18.9022C130.438 19.8057 131.499 20.2538 132.911 20.2538C134.323 20.2538 135.391 19.8057 136.093 18.9022C136.803 17.9987 137.154 16.7666 137.154 15.206V4.29648C137.154 4.01273 137.385 3.78125 137.669 3.78125H139.223C139.507 3.78125 139.738 4.01273 139.738 4.29648V15.206C139.738 17.4461 139.163 19.2382 138.013 20.5674C136.863 21.904 135.159 22.5686 132.896 22.5686C130.633 22.5686 128.937 21.904 127.794 20.5674H127.817Z"
                                                        fill="#190602"></path>
                                                    <path
                                                        d="M148.792 21.7323C148.008 21.1722 147.388 20.4031 146.932 19.4324V27.2953C146.932 27.579 146.7 27.8105 146.416 27.8105H144.885C144.601 27.8105 144.37 27.579 144.37 27.2953V9.02321C144.37 8.73945 144.601 8.50797 144.885 8.50797H146.416C146.7 8.50797 146.932 8.73945 146.932 9.02321V11.3754C147.395 10.4046 148.015 9.63551 148.792 9.07548C149.576 8.51544 150.525 8.23169 151.645 8.23169C152.818 8.23169 153.864 8.54531 154.775 9.17255C155.687 9.79979 156.389 10.6585 156.882 11.7487C157.382 12.8389 157.629 14.0635 157.629 15.4001C157.629 16.7368 157.382 17.9614 156.882 19.0516C156.389 20.1418 155.679 21.008 154.775 21.6277C153.864 22.255 152.818 22.5686 151.645 22.5686C150.473 22.5686 149.576 22.2923 148.792 21.7248V21.7323ZM148.022 18.8574C148.747 19.7834 149.741 20.2463 150.988 20.2463C152.235 20.2463 153.251 19.7834 153.983 18.8574C154.708 17.9315 155.074 16.7741 155.074 15.4001C155.074 14.0262 154.708 12.8688 153.983 11.9429C153.259 11.0169 152.258 10.554 150.988 10.554C149.718 10.554 148.747 11.0169 148.022 11.9429C147.298 12.8688 146.932 14.0262 146.932 15.4001C146.932 16.7741 147.298 17.9315 148.022 18.8574Z"
                                                        fill="#190602"></path>
                                                    <path
                                                        d="M113.96 20.097H117.971C118.255 20.097 118.487 20.3284 118.487 20.6122V21.8069C118.487 22.0907 118.255 22.3222 117.971 22.3222H111.981C111.697 22.3222 111.465 22.0907 111.465 21.8069V6.04381H109.486C109.202 6.04381 108.97 5.81233 108.97 5.52858V4.33384C108.97 4.05008 109.202 3.8186 109.486 3.8186H112.436C113.295 3.8186 113.968 4.51305 113.968 5.34937V20.097H113.96Z"
                                                        fill="#190602"></path>
                                                    <path
                                                        d="M5.46823 25.9885C2.52511 25.9885 0.134766 23.5991 0.134766 20.657V4.03515C0.134766 1.91448 1.8603 0.189575 3.98173 0.189575C6.86509 0.189575 9.65133 1.17524 11.8923 2.97482C13.9689 2.26544 16.1351 1.89955 18.3537 1.89955C20.5722 1.89955 22.7385 2.25797 24.8151 2.97482C27.0486 1.17524 29.8348 0.189575 32.7257 0.189575C34.8471 0.189575 36.5726 1.91448 36.5726 4.03515V20.657C36.5726 23.5991 34.1823 25.9885 31.2392 25.9885H5.46823Z"
                                                        fill="#EBC28E"></path>
                                                    <path
                                                        d="M36.5651 20.6197V4.03515C36.5651 1.91448 34.8396 0.189575 32.7182 0.189575C29.8348 0.189575 27.056 1.1827 24.8151 2.98229C24.6956 2.93748 24.5761 2.89268 24.4565 2.85534C23.9486 2.69107 23.3958 2.96735 23.2315 3.48258C23.0672 3.99035 23.3435 4.54292 23.859 4.70719C26.3389 5.50618 28.6695 6.88013 30.5818 8.66478C30.7686 8.83652 31.0076 8.92613 31.2466 8.92613C31.5081 8.92613 31.762 8.82159 31.9563 8.61998C32.3223 8.23168 32.2999 7.61191 31.9114 7.24602C30.4399 5.87207 28.7442 4.72213 26.9216 3.85594C28.6397 2.74334 30.6416 2.1385 32.7182 2.1385C33.7714 2.1385 34.623 2.98975 34.623 4.04262V16.4903C30.5743 12.137 25.45 9.0232 19.7281 7.49244C18.8392 7.25349 17.8682 7.25349 16.9718 7.49244C11.2499 9.0232 6.1181 12.1445 2.07692 16.4903V4.03515C2.07692 2.98229 2.93595 2.13103 3.98173 2.13103C6.05087 2.13103 8.05279 2.73587 9.77085 3.84847C7.97062 4.70719 6.28991 5.8422 4.79594 7.23855C4.40004 7.60444 4.3851 8.21675 4.75112 8.61251C4.94534 8.81412 5.19931 8.91866 5.46076 8.91866C5.69979 8.91866 5.93883 8.82905 6.12557 8.65731C9.45712 5.55098 13.7971 3.84847 18.3537 3.84847C18.7421 3.84847 19.1306 3.86341 19.5115 3.88581C20.0419 3.90821 20.505 3.51245 20.5424 2.97482C20.5797 2.43718 20.1689 1.98169 19.631 1.94435C19.2053 1.91448 18.7795 1.90702 18.3537 1.90702C16.1277 1.90702 13.939 2.28037 11.8848 2.98229C9.64386 1.1827 6.86509 0.189575 3.98173 0.189575C1.8603 0.189575 0.134766 1.91448 0.134766 4.03515V20.6197C0.134766 20.6197 0.134766 20.6421 0.134766 20.6495C0.134766 20.6495 0.134766 20.6495 0.134766 20.657C0.134766 22.6358 1.22536 24.3607 2.83885 25.2792C2.85379 25.2866 2.86873 25.3016 2.88366 25.309C3.65306 25.7347 4.5345 25.9811 5.46823 25.9811H31.2317C32.1729 25.9811 33.0543 25.7347 33.8162 25.309C33.8312 25.3016 33.8461 25.2941 33.8611 25.2792C35.4671 24.3607 36.5577 22.6358 36.5651 20.657C36.5651 20.657 36.5651 20.657 36.5651 20.6495C36.5651 20.6421 36.5651 20.6271 36.5651 20.6197ZM4.4598 23.8753C4.59426 23.4422 4.78847 23.039 5.06486 22.6955C6.20027 21.2245 7.44773 19.9103 8.78483 18.7454C8.7176 19.1785 8.68026 19.634 8.68026 20.1044C8.68026 21.6427 9.04628 23.0166 9.6588 24.0546H5.46823C5.10967 24.0546 4.77353 23.9873 4.45233 23.8828L4.4598 23.8753ZM24.1578 24.0471C23.2614 24.0471 22.2529 22.3595 22.2529 20.097C22.2529 17.8344 23.2614 16.1469 24.1578 16.1469C25.0541 16.1469 26.0626 17.8344 26.0626 20.097C26.0626 22.3595 25.0541 24.0471 24.1578 24.0471ZM20.3108 20.097C20.3108 21.6352 20.6768 23.0092 21.2893 24.0471H15.4031C16.0082 23.0092 16.3817 21.6352 16.3817 20.097C16.3817 17.8792 15.6197 15.99 14.4619 14.982C15.5002 14.4891 16.5609 14.0635 17.6515 13.7275C18.0997 13.5931 18.6002 13.5856 19.0484 13.7275C20.139 14.0635 21.1997 14.4891 22.2305 14.982C21.0727 15.99 20.3108 17.8792 20.3108 20.097ZM10.6224 20.097C10.6224 17.8344 11.6308 16.1469 12.5272 16.1469C13.4236 16.1469 14.432 17.8344 14.432 20.097C14.432 22.3595 13.4236 24.0471 12.5272 24.0471C11.6308 24.0471 10.6224 22.3595 10.6224 20.097ZM31.2317 24.0471H27.0262C27.6312 23.0092 28.0047 21.6352 28.0047 20.097C28.0047 19.6265 27.9674 19.1636 27.9001 18.7305C29.2447 19.9028 30.5071 21.2245 31.65 22.7105C31.9189 23.054 32.1206 23.4497 32.2476 23.8828C31.9264 23.9873 31.5902 24.0546 31.2317 24.0546V24.0471ZM34.623 20.657C34.623 21.4411 34.3466 22.1579 33.8909 22.7329C33.7042 22.2923 33.4652 21.8816 33.1738 21.5083C29.5584 16.8114 24.8674 13.4811 19.6161 11.8682C18.7944 11.6218 17.9055 11.6143 17.0838 11.8682C14.9624 12.5178 12.9381 13.4661 11.0333 14.6534C11.0183 14.6609 11.0034 14.6684 10.9959 14.6833C8.20219 16.4306 5.67738 18.723 3.53354 21.5008C3.23475 21.8741 2.99571 22.2923 2.80897 22.7329C2.36078 22.1579 2.07692 21.4411 2.07692 20.657V20.6421C2.07692 19.8057 2.39066 18.9993 2.96583 18.3646C6.84268 13.9739 11.8624 10.8601 17.4722 9.35922C18.0325 9.20988 18.66 9.20988 19.2277 9.35922C24.845 10.8601 29.8572 13.9739 33.749 18.3795C34.3167 18.9993 34.623 19.8057 34.6305 20.6421V20.657H34.623Z"
                                                        fill="#190602"></path>
                                                    <path
                                                        d="M12.5272 24.0471C13.4236 24.0471 14.4321 22.3595 14.4321 20.097C14.4321 17.8344 13.4236 16.1469 12.5272 16.1469C11.6309 16.1469 10.6224 17.8344 10.6224 20.097C10.6224 22.3595 11.6309 24.0471 12.5272 24.0471Z"
                                                        fill="white"></path>
                                                    <path
                                                        d="M24.1577 24.0471C25.0541 24.0471 26.0625 22.3595 26.0625 20.097C26.0625 17.8344 25.0541 16.1469 24.1577 16.1469C23.2614 16.1469 22.2529 17.8344 22.2529 20.097C22.2529 22.3595 23.2614 24.0471 24.1577 24.0471Z"
                                                        fill="white"></path>
                                                    <path
                                                        d="M9.65884 24.047C9.05379 23.0091 8.68029 21.6351 8.68029 20.0969C8.68029 19.6264 8.71764 19.1784 8.78487 18.7379C7.44777 19.9102 6.19284 21.2169 5.0649 22.688C4.78851 23.0389 4.58683 23.4347 4.45984 23.8678C4.78104 23.9723 5.11718 24.0395 5.47574 24.0395H9.66631L9.65884 24.047Z"
                                                        fill="#514641"></path>
                                                    <path
                                                        d="M19.0484 13.7274C18.5927 13.5855 18.0997 13.593 17.6515 13.7274C16.5609 14.0634 15.5002 14.4891 14.4619 14.9819C15.6123 15.9899 16.3817 17.8791 16.3817 20.0969C16.3817 21.6351 16.0156 23.0091 15.4031 24.047H21.2893C20.6843 23.0091 20.3108 21.6351 20.3108 20.0969C20.3108 17.8791 21.0727 15.9825 22.2305 14.9819C21.1997 14.4891 20.139 14.0634 19.0484 13.7274Z"
                                                        fill="#514641"></path>
                                                    <path
                                                        d="M31.2316 24.047C31.5902 24.047 31.9263 23.9798 32.2475 23.8753C32.1131 23.4422 31.9189 23.0464 31.6499 22.7029C30.5071 21.2245 29.2521 19.9028 27.9001 18.723C27.9673 19.1635 28.0047 19.619 28.0047 20.0894C28.0047 21.6277 27.6386 23.0016 27.0261 24.0396H31.2316V24.047Z"
                                                        fill="#514641"></path>
                                                    <path
                                                        d="M34.623 20.657V20.642C34.623 19.8057 34.3093 18.9993 33.7416 18.3795C29.8572 13.9814 24.8375 10.8676 19.2202 9.3592C18.6525 9.20986 18.025 9.20986 17.4648 9.3592C11.8549 10.8601 6.83521 13.9739 2.95837 18.3646C2.38319 18.9993 2.07693 19.7983 2.06946 20.642V20.657C2.06946 21.441 2.34584 22.1579 2.8015 22.7328C2.98825 22.2923 3.23475 21.8741 3.52608 21.5008C5.66992 18.723 8.19472 16.4306 10.9884 14.6833C11.0034 14.6758 11.0183 14.6683 11.0258 14.6534C12.9306 13.4661 14.9549 12.5178 17.0764 11.8682C17.9055 11.6143 18.7944 11.6217 19.6086 11.8682C24.8674 13.4811 29.551 16.8114 33.1664 21.5082C33.4577 21.8741 33.6967 22.2923 33.8835 22.7328C34.3317 22.1579 34.6155 21.441 34.6155 20.657H34.623Z"
                                                        fill="#A4D9D3"></path>
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_5278_1948">
                                                        <rect width="157.501" height="27.6209" fill="white" transform="translate(0.134766 0.189575)">
                                                        </rect>
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                            <p className="MuiTypography-root MuiTypography-body1 css-17xg8uj e1de0imv0">
                                                Are you a developer?
                                            </p>
                                            <p className="MuiTypography-root MuiTypography-body1 css-lbagkb e1de0imv0">
                                                Complete our level up challenges and join a study
                                                group of dedicated developers
                                            </p>
                                        </a><a
                                            className="MuiButtonBase-root MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium e1de0imv0 css-1kvt6zv-action-action e1de0imv0"
                                            tabindex="0" href="https://levelupweb3.xyz/" target="_blank">Visit Level Up Site<span
                                                className="MuiButton-endIcon MuiButton-iconSizeMedium css-pt151d e1de0imv0">
                                                <svg width="14"
                                                    height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"
                                                    className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-13vatta e1de0imv0" focusable="false"
                                                    aria-hidden="true">
                                                    <g clip-path="url(#clip0_287_384)">
                                                        <path
                                                            d="M14 0V10.6795L12.1926 8.8721V3.05488C8.50054 6.64105 5.12622 10.5467 1.32821 14L0 12.6987C3.77279 9.24535 7.11853 5.39354 10.7854 1.83259H5.15312L3.32052 0H14Z"
                                                            fill="currentColor"></path>
                                                    </g>
                                                </svg></span></a>
                                    </div>
                                    <div className="MuiBox-root css-f64szn e1de0imv0">
                                        <img className='md:block hidden' src={wizardImg} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
