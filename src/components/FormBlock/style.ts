import styled from "styled-components";

export const Container = styled.form`
	width: 320px;
	height: 100%;
	box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.25);
	background-color: var(--background);
	margin: 6rem auto;
	padding: 1rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1rem;
	border: 1px solid #a900ff6b;
	.firstGroup,
	.secondGroup,
	.heading {
		max-width: 100%;
		width: 100%;
		display: flex;
		flex-direction: column;
		gap: 0.625rem;
	}
	h3 {
		font-size: 1rem;
		font-weight: 600;
		&::after {
			content: "";
			display: block;
			width: 80px;
			height: 2px;
			background-color: #a400f7;
		}
	}
	span {
		font-size: 0.875rem;
	}
	label {
		font-size: 0.75rem;
		font-weight: 600;
	}
	input {
		width: 100%;
		height: 30px;
		border: 1px solid var(--gray);
		transition: border 0.2s ease-in-out;
		padding: 0.31rem;

		&:focus-visible {
			border: 1px solid #2196f3;
			outline: none;
		}
	}
	button {
		background: var(--green);
		color: #fff;
		border: 1px solid var(--black);
		width: 130px;
		height: 30px;
		font-weight: 600;
		box-shadow:0px 3px 0px 0px rgb(0 0 0), 0px 4px 0px 0px rgb(0 0 0);;
	}
	.secondGroup {
		display: none;
	}
	.show {
		display: block;
		animation: show 0.2s forwards;
	}
	.steps {
		span {
			font-weight: 600;
		}
	}
	@keyframes show {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}

	.none {
		display: none;
		animation: none 0.2s forwards;
	}

	@keyframes none {
		from {
			opacity: 1;
		}
		to {
			opacity: 0;
		}
	}
	.progress-bar {
		width: 100%;
		position: relative;

		&::after {
			content: "";
			background: green;
			display: block;
			height: 3px;
			width: 50%;
			transition: width 0.6s ease-out;
		}
		&.second_page::after {
			width: 100%;
		}
	}
`;
