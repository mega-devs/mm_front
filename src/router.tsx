import { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'

import {
	Confirm,
	Contact,
	Faq,
	Help,
	Home,
	IMAP,
	Login,
	Mailing,
	Pricing,
	Proxy,
	Register,
	SMPT,
	TechnicalWork
} from '@/pages'

export const ROUTE_NAMES = {
	confirm: '/confirm',
	contact: '/contact',
	faq: '/faq',
	help: '/help',
	main: '/',
	imap: '/imap',
	login: '/login',
	mailing: '/mailing',
	pricing: '/pricing',
	proxy: '/proxy',
	register: '/register',
	smpt: '/smpt',
	technicalWork: '/technical-work'
}

const AppRouter = () => {
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<Routes>
				<Route path={ROUTE_NAMES.confirm} element={<Confirm />}></Route>
				<Route path={ROUTE_NAMES.contact} element={<Contact />}></Route>
				<Route path={ROUTE_NAMES.faq} element={<Faq />}></Route>
				<Route path={ROUTE_NAMES.help} element={<Help />}></Route>
				<Route path={ROUTE_NAMES.main} element={<Home />}></Route>
				<Route path={ROUTE_NAMES.imap} element={<IMAP />}></Route>
				<Route path={ROUTE_NAMES.login} element={<Login />}></Route>
				<Route path={ROUTE_NAMES.mailing} element={<Mailing />}></Route>
				<Route path={ROUTE_NAMES.pricing} element={<Pricing />}></Route>
				<Route path={ROUTE_NAMES.proxy} element={<Proxy />}></Route>
				<Route path={ROUTE_NAMES.register} element={<Register />}></Route>
				<Route path={ROUTE_NAMES.smpt} element={<SMPT />}></Route>
				<Route
					path={ROUTE_NAMES.technicalWork}
					element={<TechnicalWork />}
				></Route>
			</Routes>
		</Suspense>
	)
}

export default AppRouter
