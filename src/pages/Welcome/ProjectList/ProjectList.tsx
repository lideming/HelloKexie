import React, {Component} from 'react';
import {List, Typography} from 'antd';

import css from './Project.module.css'

const {Title} = Typography

interface TProject {
    name: string
    description: string
    language: string
    avatar: string
    url: string
    languageColor: string
}

class ProjectList extends Component {
    render() {
        return (
            <List
                header={<Title level={3}>开源项目</Title>}
                dataSource={data}
                renderItem={item => (
                    <li style={{borderBottom: '1px solid #f0f0f0'}}>
                        <Project
                            name={item.name}
                            description={item.description}
                            language={item.language}
                            avatar={item.avatar}
                            url={item.url}
                            languageColor={item.languageColor}
                        />
                    </li>
                )}
            />
        );
    }
}

class Project extends Component<TProject, Object> {
    render() {
        const {name, description, language, avatar, url, languageColor} = this.props
        return (
            <div className={css.project}>
                <span>
                <span className={css.name}>
                    <a href={url} target="_blank">
                        <img className={css.avatar} src={avatar} alt=""/>
                        {name}
                    </a>
                    <span className={css.tags}>
                        {language}
                        <span className={css.languageColor} style={{background: languageColor}}/>
                    </span>
                </span>
                </span>
                <span className={css.description}>{description}</span>
            </div>
        )
    }
}

export default ProjectList;

const data: Array<TProject> = [
    {
        name: "Flexml",
        description: "🚀基于Litho的Android高性能动态业务容器。",
        language: "Kotlin",
        avatar: "https://avatars.githubusercontent.com/u/25474959?v=4",
        url: "https://github.com/sanyuankexie/Flexml",
        languageColor: "#F18E33"
    },
    {
        name: "ml.akasaki.space",
        description: "请跳转到仓库网页查看： https://ml.akasaki.space 。带有代码的深度学习方法从入门到放弃。talk is cheap, show me the code。如果有用请施舍一个star。",
        language: "Python",
        avatar: "https://avatars.githubusercontent.com/u/33346934?v=4",
        url: "https://ml.akasaki.space",
        languageColor: "#3572A5"
    },
    {
        name: "OneNet-IoT",
        description: "基于OneNet平台okHttp协议的远程环境监控App开发",
        language: "Java",
        avatar: "https://avatars.githubusercontent.com/u/37988832?s=48&v=4",
        url: "https://github.com/sanyuankexie/OneNet-IoT",
        languageColor: "#b07219"
    },
]