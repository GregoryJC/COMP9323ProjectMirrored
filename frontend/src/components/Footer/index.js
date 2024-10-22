import React from 'react'
import './style.css'
import { Divider } from 'antd'

function Footer() {
    const link = "https://github.com/zIDAedgen/COMP9323TouchFish"
    return (
        <div>
            <div className="Footer-body">
                <div className="Footer-columns">
                    <div className="Footer-lines">
                        <h2 className="title">STATEMENT</h2>
                        <br/>
                        <p>
                            This website is for learning use, following &nbsp;<a
                            href="https://opensource.org/licenses/MIT">MIT License.</a>
                            &nbsp; All articles and images are from Internet. If the content of this site has
                            an impact on your rights, please send an email to <a
                            href="mailto:menglingxu95@gmail.com">menglingxu95@gmail.com</a>&nbsp; and we will delete the
                            copyrighted content as soon as possible.
                        </p>
                    </div>
                    <div className="Footer-lines">
                        <h2 className="title">FOLLOW</h2>
                        <br/>
                        <a href={link}
                           className="detail"><img src={require("../../assets/images/GitHub-Mark-120px-plus.png")}
                                                   className="GitHub-icon" alt="github"/>&nbsp;&nbsp;GitHub</a>
                    </div>
                </div>
            </div>
            <Divider style={{fontSize: 13}}>Copyright © 2019 &nbsp;
                <a href={link}>Alan
                    Worship Society</a>&nbsp;All rights reserved
            </Divider>
        </div>
    )
}

export default Footer