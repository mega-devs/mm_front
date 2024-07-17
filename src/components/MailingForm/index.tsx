import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'

import { AdminIndicators } from '@/components'
import { CheckboxForm, TextareaForm } from '@/form'
import { Remove, Save, Show } from '@/icons'
import { ButtonSmall, Title } from '@/ui'

import styles from './style.module.scss'

const MailingForm = () => {
	const { t } = useTranslation()

	const { register } = useForm()

	const indicators = [
		[
			{
				title: t('adminIndicators1'),
				value: 0
			},
			{
				title: t('adminIndicators2'),
				value: 0
			},
			{
				title: t('adminIndicators3'),
				value: 0
			},
			{
				title: t('adminIndicators4'),
				value: 0
			}
		],
		[
			{
				title: t('adminIndicators5'),
				value: 0
			},
			{
				title: t('adminIndicators6'),
				value: 0
			},
			{
				title: t('adminIndicators7'),
				value: 0
			},
			{
				title: t('adminIndicators8'),
				value: 0
			}
		],
		[
			{
				title: t('adminIndicators9'),
				value: 0
			},
			{
				title: t('adminIndicators10'),
				value: 0
			},
			{
				title: t('adminIndicators11'),
				value: 0
			},
			{
				title: t('adminIndicators12'),
				value: 0
			}
		],
		[
			{
				title: t('adminIndicators13'),
				value: 0
			},
			{
				title: t('adminIndicators14'),
				value: 0
			},
			{
				title: t('adminIndicators15'),
				value: '00:00:00'
			},
			{
				title: t('adminIndicators16'),
				value: '00h 00m'
			}
		]
	]

	return (
		<div className={styles.mailing_form}>
			<Title>{t('mailingFormTitle')}</Title>
			<div className={styles.mailing_form__content}>
				<form className={styles.mailing_form__form}>
					<CheckboxForm register={register} name='template'>
						{t('mailingFormCheckbox1')}
					</CheckboxForm>
					<TextareaForm
						register={register}
						name='list'
						label={t('smptFormTextarea1')}
						rows={10}
					/>
					<div className='btns'>
						<ButtonSmall>
							<Save />
							<span>{t('mailingFormButton1')}</span>
						</ButtonSmall>
						<ButtonSmall>
							<Remove />
							<span>{t('mailingFormButton2')}</span>
						</ButtonSmall>
						<ButtonSmall>
							<Show />
							<span>{t('mailingFormButton3')}</span>
						</ButtonSmall>
					</div>
				</form>
				<AdminIndicators indicators={indicators} />
			</div>
		</div>
	)
}

export default MailingForm
