import { useTranslation } from 'react-i18next'
import Title from '../../ui/Title'
import styles from './style.module.scss'
import Line from '../../ui/Line'
import { useState } from 'react'
import P from '../../ui/P'
import TitleSmall from '../../ui/TitleSmall'
import Item from '../Item'
import MyLink from '../../ui/MyLink'
import Button from '../../ui/Button'
import { ROUTE_NAMES } from '../../app/router'

export default function PricingChoose() {
	const { t } = useTranslation()

	const [switchPlan, setSwitchPlan] = useState(0)

	const switchItems = Array.from('1'.repeat(2))

	const pricePlans = Array.from('1'.repeat(3))

	return (
		<div className={styles.pricing_choose}>
			<Title variant='center'>{t('pricingChooseTitle')}</Title>
			<div className={styles.pricing_choose__switch}>
				{switchItems.map((item, i) => (
					<div
						className={
							styles.pricing_choose__switch_item +
							(switchPlan === i ? ' ' + styles.active : '') +
							' style-block'
						}
						key={i}
						onClick={() => setSwitchPlan(i)}
					>
						<TitleSmall>{t('pricingChooseSwitchTitle' + (i + 1))}</TitleSmall>
						<P>{t('pricingChooseSwitchDescription' + (i + 1))}</P>
					</div>
				))}
			</div>
			<div className={styles.pricing_choose__prices}>
				<ul className={styles.pricing_choose__list}>
					{pricePlans.map((item, i) => (
						<Item
							className={styles.pricing_choose__item}
							key={i}
							variant='red'
							title={t('pricingChoosePlanTitle' + (i + 1))}
							description={
								<div className={styles.pricing_choose__item_content}>
									<div className={styles.pricing_choose__item_price}>
										{t('pricingChoosePlanPrice' + (i + 1))}
									</div>
									<div className={styles.pricing_choose__item_year}>
										{t('pricingChoosePlanPer' + (i + 1))}
									</div>
									<div className={styles.pricing_choose__item_storage}>
										{t('pricingChoosePlanStorage' + (i + 1) + '1')}
										<br />
										{t('pricingChoosePlanStorage' + (i + 1) + '2')}
									</div>
									<MyLink to={ROUTE_NAMES.confirm}>
										<Button>{t('pricingChoosePlanConfirm')}</Button>
									</MyLink>
								</div>
							}
						/>
					))}
				</ul>
				<P>{t('pricingChoosePlanEstimated')}</P>
			</div>
			<div className={styles.pricing_choose__forever + ' style-block'}>
				<div className={styles.pricing_choose__forever__left}>
					<TitleSmall variant='uppercase'>
						{t('pricingChooseForeverTitle')}
					</TitleSmall>
					<ul className={styles.pricing_choose__forever_ul}>
						{[1, 2].map((item, i) => (
							<li className={styles.pricing_choose__forever_li} key={i}>
								<svg
									width='24'
									height='25'
									viewBox='0 0 24 25'
									fill='none'
									stroke='#DD1405'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										d='M10.9503 5.39498C11.4071 4.57028 12.5929 4.57028 13.0497 5.39498L14.8426 8.63154C14.9805 8.88046 15.2179 9.05885 15.4953 9.12202L19.0707 9.93609C19.9491 10.1361 20.3021 11.1967 19.7187 11.8832L17.2239 14.8189C17.0488 15.025 16.9646 15.2932 16.9905 15.5623L17.3616 19.416C17.4505 20.3388 16.5039 21.0096 15.6627 20.6198L12.4204 19.1175C12.1538 18.994 11.8462 18.994 11.5796 19.1175L8.33734 20.6198C7.49613 21.0096 6.54951 20.3388 6.63837 19.416L7.00945 15.5623C7.03537 15.2932 6.95118 15.025 6.77608 14.8189L4.28134 11.8832C3.69794 11.1967 4.05091 10.1361 4.92935 9.93609L8.50468 9.12202C8.78214 9.05885 9.01954 8.88046 9.15743 8.63154L10.9503 5.39498Z'
										strokeWidth='1.5'
									/>
								</svg>
								<span>{t('pricingChooseForeverItem' + (i + 1))}</span>
							</li>
						))}
					</ul>
				</div>
				<div className={styles.pricing_choose__forever__right}>
					<div className={styles.pricing_choose__forever_flex}>
						<span className={styles.pricing_choose__forever_price}>
							{t('pricingChooseForeverPrice')}
						</span>
						<P>{t('Forever')}</P>
					</div>
					<MyLink to={ROUTE_NAMES.confirm}>
						<Button
							className={styles.pricing_choose__forever_button}
							variant='outlined'
						>
							{t('pricingChoosePlanConfirm')}
						</Button>
					</MyLink>
				</div>
			</div>
			<Line />
		</div>
	)
}
