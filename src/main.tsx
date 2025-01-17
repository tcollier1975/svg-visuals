import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ConfigProvider , Button} from 'antd';
import  "./index.css"
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ConfigProvider
      componentSize='small'
      theme={{
      token: {
        // Seed Token
        colorPrimary: '#00b96b',
        borderRadius: 5,

        // Alias Token
        colorBgContainer: '#f6ffed',
      },
      components: {
        Button: {
          colorPrimary: 'yellow',
        },
      },
      }}
      
      >


  
    <App />
    </ConfigProvider>
  </StrictMode>,
)
