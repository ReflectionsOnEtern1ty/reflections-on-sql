import ruRu from 'antd/lib/locale/ru_RU'
import { ConfigProvider } from 'antd'

import './Styles.less'
import DockLayout, { DividerBox, LayoutData } from 'rc-dock'
import 'rc-dock/dist/rc-dock-dark.css'
import DBTreeList from './components/DBTreeList/DBTreeList'
import AceEditor from 'react-ace'

import "ace-builds/src-noconflict/mode-jsx";
import "ace-builds/src-noconflict/ext-language_tools"

import 'ace-builds/src-noconflict/mode-mysql'
import 'ace-builds/src-noconflict/theme-twilight'

export function App() {
  const layoutLeft: LayoutData = {
    dockbox: {
      mode: 'horizontal',
      children: [
        {
          tabs: [
            {
              id: 't1',
              title: 'Object Explorer',
              content: <DBTreeList />,
            },
          ],
        },
      ],
    },
  }

  const layoutRight: LayoutData = {
    dockbox: {
      mode: 'vertical',
      children: [
        {
          tabs: [
            {
              id: 't2',
              title: 'New Sql',
              content: (
                <AceEditor
                  mode="mysql"
                  theme="twilight"
                  name="ace"
                  setOptions={{
                    enableBasicAutocompletion: true,
                    enableLiveAutocompletion: true,
                    showLineNumbers: true,
                    tabSize: 2,
                    useWorker: false,
                  }}
                  editorProps={{ $blockScrolling: true }}
                />
              ),
            },
          ],
        },
        {
          tabs: [
            {
              id: 't3',
              title: 'Results',
              content: <div>Query results</div>,
            },
            {
              id: 't4',
              title: 'Messages',
              content: <div>Query messages</div>,
            },
          ],
        },
      ],
    },
  }

  return (
    <>
      <ConfigProvider locale={ruRu}>
        <DividerBox
          style={{
            position: 'absolute',
            left: 10,
            top: 10,
            right: 10,
            bottom: 10,
          }}
        >
          <DockLayout
            defaultLayout={layoutLeft}
            style={{ width: '20%', minWidth: 200 }}
          />
          <DockLayout
            defaultLayout={layoutRight}
            style={{ width: '80%', minWidth: 200 }}
          />
        </DividerBox>
      </ConfigProvider>
    </>
  )
}
