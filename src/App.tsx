import { ConfigProvider, theme, Button, Card, Flex, Layout } from 'antd'
import { Content, Footer, Header } from 'antd/es/layout/layout'
import { useState } from 'react'
import { FiMoon, FiSun } from 'react-icons/fi'

export default function App() {
    const { defaultAlgorithm, darkAlgorithm } = theme
    const [isDarkMode, setIsDarkMode] = useState(false)

    function renderContent() {
        return (
            <ConfigProvider
                direction="ltr"
                theme={{
                    algorithm: isDarkMode ? darkAlgorithm : defaultAlgorithm,
                    components: {
                        Layout: {
                            headerBg: isDarkMode ? '#001529' : '#d9d9d9',
                            footerBg: isDarkMode ? '#001529' : '#d9d9d9'
                        }
                    }
                }}
                
            >
                <Layout style={{height: '100%'}}> 
                    <Header />
                    <Content style={{height: '100%'}}>
                    <div style={{height: '100%'}}>
                    <h1>FALA GALERAAA</h1>
                    <Button
                        id="button-test"
                        onClick={() => setIsDarkMode(!isDarkMode)}
                    >
                        {isDarkMode ? <FiSun /> : <FiMoon />}
                    </Button>
                    </div>
                    </Content>
                    <Footer style={{display:'flex', justifyContent: 'center'}}>Made by Luizão</Footer>
                </Layout>
            </ConfigProvider>
        )
    }

    return renderContent()
}
