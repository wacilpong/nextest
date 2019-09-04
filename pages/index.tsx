import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Nav from '../components/nav'

import { Layout } from "antd";

import classNames from 'classnames/bind';

import style from './test.module.scss';

const cx = classNames.bind(style);

const Home = () => (
  <Layout className="app">
    <Head>
      <title>Home</title>
    </Head>

    <h1 className={cx("highlight")}>Welcome to Next.js!</h1>
  </Layout>
)

export default Home
