import { useState, useCallback} from "react";
import { Container } from "./style";
import { Input } from "../Input";

interface Usuario {
	cep: string;
}

export const FormBlock: React.FC = () => {
	const [page, setPage] = useState(1);
	const [isSubmit, setIsSubmit] = useState(false);

	const [user, setUser] = useState<Usuario>({} as Usuario);

	const handleChange = useCallback((e: React.FormEvent<HTMLInputElement>) => {
		setUser({
			...user,
			[e.currentTarget.name]: e.currentTarget.value,
		});
	}, [user]);

	function NextPage() {
		page === 1 ? setPage(page + 1) : setIsSubmit(true);
	}
	return (
		<Container>
			<div className="heading">
				<h3>Acesso Instantâneo e Gratuito</h3>
				<span>Basta preencher o formulário abaixo</span>
			</div>

			<div className={page === 2 ? "firstGroup none" : "firstGroup"}>
				<label>E-mail</label>
				<input type="email" placeholder="E-mail" />
			</div>

			<div className={page === 2 ? "secondGroup show" : "secondGroup"}>
				<label>Nome</label>
				<input type="text" placeholder="Nome" />
				<label>Whatsapp</label>
				<Input mask="phone" placeholder="(43) 99999-9999" name="Whatsapp" onChange={handleChange} />
			</div>

			<div className="steps">
				<span>Passo {page}</span>
			</div>

			<div className={page === 2 ? "progress-bar second_page" : "progress-bar"}></div>

			<button type={isSubmit === true ? "submit" : "button"} onClick={NextPage}>
				Quero um e-book
			</button>
		</Container>
	);
}
