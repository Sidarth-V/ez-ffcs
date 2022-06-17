import Select from 'react-select';

const SelectCourses = ({ allCourses, onCourseCodeChangeHandler }) => {
	const customStyles = {
		control: (base) => ({
			...base,
			height: 52,
			width: 200,
			background: 'rgb(15, 17, 22)',
			color: 'white',
			boxShadow: 'none',
			border: '1px solid rgb(49, 54, 60)',
			':hover': {
				boxShadow: 'none',
				border: '1px solid rgb(49, 54, 60)',
			},
		}),
		option: (styles) => ({
			...styles,
			backgroundColor: 'rgb(15, 17, 22)',
			color: 'white',
			':hover': {
				backgroundColor: 'rgb(49, 54, 60)',
				color: 'white',
			},
		}),
		menu: (provided) => ({
			...provided,
			backgroundColor: 'rgb(15, 17, 22)',
			color: 'white',
		}),
		singleValue: (provided) => ({
			...provided,
			color: 'white',
		}),
	};
	return (
		<Select
			options={allCourses}
			onChange={onCourseCodeChangeHandler}
			isClearable={true}
			isSearchable={true}
			defaultValue={''}
			styles={customStyles}
			placeholder={'course code'}
			theme={(theme) => ({
				...theme,
				colors: {
					...theme.colors,
					neutral80: 'white',
				},
			})}
		/>
	);
};

export default SelectCourses;
