import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'

import AdminIndicators from '@/components/AdminIndicators'

import { CheckboxForm, InputForm } from '@/form'
import { Database, Load, Save, Select } from '@/icons'
import { ButtonSmall, Title } from '@/ui'

import styles from './style.module.scss'

const ImapForm = () => {
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
		<div className={styles.imap_form}>
			<Title>{t('imapFormTitle')}</Title>
			<div className={styles.imap_form__content}>
				<form className={styles.imap_form__form} action='' method='POST'>
					<div className='form-inputs'>
						<InputForm
							label={t('imapFormInput1')}
							register={register}
							name='server'
						/>
						<InputForm
							label={t('imapFormInput2')}
							register={register}
							name='email'
						/>
						<InputForm
							label={t('imapFormInput3')}
							register={register}
							name='port'
						/>
						<InputForm
							label={t('imapFormInput4')}
							register={register}
							name='sec'
						/>
						<InputForm
							label={t('imapFormInput5')}
							register={register}
							name='min'
						/>
						<CheckboxForm
							className='form-field__full'
							register={register}
							variant='arrow'
							name='ssl'
						>
							{t('imapFormCheckbox1')}
						</CheckboxForm>
						<CheckboxForm
							className='form-field__full'
							register={register}
							variant='arrow'
							name='use_check'
						>
							{t('imapFormCheckbox2')}
						</CheckboxForm>
						<CheckboxForm
							className='form-field__full'
							register={register}
							variant='arrow'
							name='enable_recheckers'
						>
							{t('imapFormCheckbox3')}
						</CheckboxForm>
						<CheckboxForm
							className='form-field__full'
							register={register}
							variant='arrow'
							name='accept'
						>
							{t('imapFormCheckbox4')}
						</CheckboxForm>
					</div>
					<div className='btns'>
						<ButtonSmall>
							<Select />
							{t('imapFormButton1')}
						</ButtonSmall>
						<ButtonSmall>
							<Save />
							{t('imapFormButton2')}
						</ButtonSmall>
						<ButtonSmall>
							<Load />
							{t('imapFormButton3')}
						</ButtonSmall>
						<ButtonSmall>
							<Database />
							{t('imapFormButton4')}
						</ButtonSmall>
					</div>
				</form>
				<AdminIndicators indicators={indicators} />
			</div>
		</div>
	)
}

export default ImapForm
