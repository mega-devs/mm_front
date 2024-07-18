import { useTranslation } from 'react-i18next'

import { ROUTE_NAMES } from '@/router'
import { Button, Circle, MyLink, TitleMiddle } from '@/ui'

import styles from './style.module.scss'

const PricingTable = () => {
	const { t } = useTranslation()

	return (
		<div className={styles.pricing_table}>
			<div className={styles.pricing_table__inner}>
				<div
					className={
						styles.pricing_table__item + ' ' + styles.pricing_table__item_names
					}
				>
					<div></div>
					<div className={styles.pricing_table__item_name}>
						<TitleMiddle variant='uppercase'>
							{t('pricingTableName1')}
						</TitleMiddle>
						<MyLink to={ROUTE_NAMES.confirm}>
							<Button variant='outlined' style={{ width: '100%' }}>
								{t('pricingChoosePlanConfirm')}
							</Button>
						</MyLink>
					</div>
					<div className={styles.pricing_table__item_name}>
						<TitleMiddle variant='uppercase'>
							{t('pricingTableName2')}
						</TitleMiddle>
					</div>
					<div className={styles.pricing_table__item_name}>
						<TitleMiddle variant='uppercase'>
							{t('pricingTableName3')}
						</TitleMiddle>
					</div>
				</div>
				<TitleMiddle className={styles.pricing_table__title_middle}>
					{t('pricingTableTitle1')}
				</TitleMiddle>
				<div className={styles.pricing_table__item + ' ' + styles._first}>
					<div className={styles.pricing_table__item_td}>
						{t('pricingTableItemName1')}
					</div>
					<div className={styles.pricing_table__item_td}>
						{t('pricingTableItemValue11')}
					</div>
					<div className={styles.pricing_table__item_td}>
						{t('pricingTableItemValue12')}
					</div>
					<div className={styles.pricing_table__item_td}>
						{t('pricingTableItemValue13')}
					</div>
				</div>
				<div className={styles.pricing_table__item}>
					<div className={styles.pricing_table__item_td}>
						{t('pricingTableItemName2')}
					</div>
					<div className={styles.pricing_table__item_td}>
						{t('pricingTableItemValue21')}
					</div>
					<div className={styles.pricing_table__item_td}>
						{t('pricingTableItemValue22')}
					</div>
					<div className={styles.pricing_table__item_td}>
						{t('pricingTableItemValue23')}
					</div>
				</div>
				<div className={styles.pricing_table__item}>
					<div className={styles.pricing_table__item_td}>
						{t('pricingTableItemName3')}
					</div>
					<div className={styles.pricing_table__item_td}>
						{t('pricingTableItemValue31')}
					</div>
					<div className={styles.pricing_table__item_td}>
						{t('pricingTableItemValue32')}
					</div>
					<div className={styles.pricing_table__item_td}>
						{t('pricingTableItemValue33')}
					</div>
				</div>
				<div className={styles.pricing_table__item}>
					<div className={styles.pricing_table__item_td}>
						{t('pricingTableItemName4')}
					</div>
					<div className={styles.pricing_table__item_td}>
						<Circle />
					</div>
					<div className={styles.pricing_table__item_td}>
						<Circle variant='red' />
					</div>
					<div className={styles.pricing_table__item_td}>
						<Circle variant='red' />
					</div>
				</div>
				<TitleMiddle
					className={styles.pricing_table__title_middle + ' ' + styles._second}
				>
					{t('pricingTableTitle2')}
				</TitleMiddle>
				<div className={styles.pricing_table__item + ' ' + styles._first}>
					<div className={styles.pricing_table__item_td}>
						{t('pricingTableItemName5')}
					</div>
					<div className={styles.pricing_table__item_td}>
						<Circle />
					</div>
					<div className={styles.pricing_table__item_td}>
						<Circle variant='red' />
					</div>
					<div className={styles.pricing_table__item_td}>
						<Circle variant='red' />
					</div>
				</div>
				<div className={styles.pricing_table__item}>
					<div className={styles.pricing_table__item_td}>
						{t('pricingTableItemName6')}
					</div>
					<div className={styles.pricing_table__item_td}>
						<Circle />
					</div>
					<div className={styles.pricing_table__item_td}>
						<Circle variant='red' />
					</div>
					<div className={styles.pricing_table__item_td}>
						<Circle variant='red' />
					</div>
				</div>
				<div className={styles.pricing_table__item}>
					<div className={styles.pricing_table__item_td}>
						{t('pricingTableItemName7')}
					</div>
					<div className={styles.pricing_table__item_td}>
						<svg
							width='20'
							height='20'
							viewBox='0 0 20 20'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M15.3125 5.31226C13.9945 5.31226 12.8039 5.85601 11.9523 6.7314L10.8172 7.89819L12.0445 9.15952L13.2133 7.95796C13.7457 7.41069 14.4902 7.07007 15.3125 7.07007C16.9277 7.07007 18.2422 8.38452 18.2422 10.0001C18.2422 11.6154 16.9277 12.9298 15.3125 12.9298C14.4902 12.9298 13.7457 12.5892 13.2133 12.0416C8.62203 7.32187 8.05445 6.73839 8.04766 6.7314C7.19609 5.85601 6.00547 5.31226 4.6875 5.31226C2.09883 5.31226 0 7.41108 0 10.0001C0 12.5888 2.09883 14.6876 4.6875 14.6876C6.00547 14.6876 7.19609 14.1439 8.04766 13.2685L9.18281 12.1017L7.95547 10.8404L6.78672 12.0416C6.2543 12.5892 5.50977 12.9298 4.6875 12.9298C3.07227 12.9298 1.75781 11.6154 1.75781 10.0001C1.75781 8.38452 3.07227 7.07007 4.6875 7.07007C5.50977 7.07007 6.2543 7.41069 6.78672 7.95796C6.98793 8.16483 11.9041 13.2189 11.9523 13.2685C12.8039 14.1439 13.9945 14.6876 15.3125 14.6876C17.9012 14.6876 20 12.5888 20 10.0001C20 7.41108 17.9012 5.31226 15.3125 5.31226Z'
								fill='var(--third-color)'
							/>
						</svg>
					</div>
					<div className={styles.pricing_table__item_td}>
						<svg
							width='20'
							height='20'
							viewBox='0 0 20 20'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M15.3125 5.31226C13.9945 5.31226 12.8039 5.85601 11.9523 6.7314L10.8172 7.89819L12.0445 9.15952L13.2133 7.95796C13.7457 7.41069 14.4902 7.07007 15.3125 7.07007C16.9277 7.07007 18.2422 8.38452 18.2422 10.0001C18.2422 11.6154 16.9277 12.9298 15.3125 12.9298C14.4902 12.9298 13.7457 12.5892 13.2133 12.0416C8.62203 7.32187 8.05445 6.73839 8.04766 6.7314C7.19609 5.85601 6.00547 5.31226 4.6875 5.31226C2.09883 5.31226 0 7.41108 0 10.0001C0 12.5888 2.09883 14.6876 4.6875 14.6876C6.00547 14.6876 7.19609 14.1439 8.04766 13.2685L9.18281 12.1017L7.95547 10.8404L6.78672 12.0416C6.2543 12.5892 5.50977 12.9298 4.6875 12.9298C3.07227 12.9298 1.75781 11.6154 1.75781 10.0001C1.75781 8.38452 3.07227 7.07007 4.6875 7.07007C5.50977 7.07007 6.2543 7.41069 6.78672 7.95796C6.98793 8.16483 11.9041 13.2189 11.9523 13.2685C12.8039 14.1439 13.9945 14.6876 15.3125 14.6876C17.9012 14.6876 20 12.5888 20 10.0001C20 7.41108 17.9012 5.31226 15.3125 5.31226Z'
								fill='var(--third-color)'
							/>
						</svg>
					</div>
					<div className={styles.pricing_table__item_td}>
						<svg
							width='20'
							height='20'
							viewBox='0 0 20 20'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M15.3125 5.31226C13.9945 5.31226 12.8039 5.85601 11.9523 6.7314L10.8172 7.89819L12.0445 9.15952L13.2133 7.95796C13.7457 7.41069 14.4902 7.07007 15.3125 7.07007C16.9277 7.07007 18.2422 8.38452 18.2422 10.0001C18.2422 11.6154 16.9277 12.9298 15.3125 12.9298C14.4902 12.9298 13.7457 12.5892 13.2133 12.0416C8.62203 7.32187 8.05445 6.73839 8.04766 6.7314C7.19609 5.85601 6.00547 5.31226 4.6875 5.31226C2.09883 5.31226 0 7.41108 0 10.0001C0 12.5888 2.09883 14.6876 4.6875 14.6876C6.00547 14.6876 7.19609 14.1439 8.04766 13.2685L9.18281 12.1017L7.95547 10.8404L6.78672 12.0416C6.2543 12.5892 5.50977 12.9298 4.6875 12.9298C3.07227 12.9298 1.75781 11.6154 1.75781 10.0001C1.75781 8.38452 3.07227 7.07007 4.6875 7.07007C5.50977 7.07007 6.2543 7.41069 6.78672 7.95796C6.98793 8.16483 11.9041 13.2189 11.9523 13.2685C12.8039 14.1439 13.9945 14.6876 15.3125 14.6876C17.9012 14.6876 20 12.5888 20 10.0001C20 7.41108 17.9012 5.31226 15.3125 5.31226Z'
								fill='var(--third-color)'
							/>
						</svg>
					</div>
				</div>
				<div className={styles.pricing_table__item}>
					<div className={styles.pricing_table__item_td}>
						{t('pricingTableItemName9')}
					</div>
					<div className={styles.pricing_table__item_td}>
						<Circle />
					</div>
					<div className={styles.pricing_table__item_td}>
						<Circle variant='red' />
					</div>
					<div className={styles.pricing_table__item_td}>
						<Circle variant='red' />
					</div>
				</div>
				<div className={styles.pricing_table__item}>
					<div className={styles.pricing_table__item_td}>
						{t('pricingTableItemName6')}
					</div>
					<div className={styles.pricing_table__item_td}>
						<Circle />
					</div>
					<div className={styles.pricing_table__item_td}>
						<Circle variant='red' />
					</div>
					<div className={styles.pricing_table__item_td}>
						<Circle variant='red' />
					</div>
				</div>
			</div>
		</div>
	)
}

export default PricingTable
