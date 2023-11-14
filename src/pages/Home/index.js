import Header from 'components/Header';
import styles from './Home.module.scss';
import mercado from 'assets/inicial.jpg';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Button from 'components/Button';
import { useEffect } from 'react';
import { carregarCategorias } from 'store/reducers/categorias';

export default function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const categorias = useSelector(state => state.categorias);

  useEffect(() => {
    dispatch(carregarCategorias());
  }, [dispatch]);

  return (
    <div>
      <Header
        titulo='É mercado, É Flex'
        descricao='Compre ou seja um vendedor no melhor mercado online'
        imagem={mercado}
        className={styles.header}
      >
        <Button onClick={() => navigate('/anuncie')}>
          Quero vender!
        </Button>
      </Header>
      <div className={styles.categorias}>
        <div className={styles['categorias-title']}>
          <h1>
            Categorias
          </h1>
        </div>
        <div className={styles['categorias-container']}>
          {categorias.map((categoria, index) => (
            <div key={index} onClick={() => navigate(`/categoria/${categoria.id}`)}>
              <img src={categoria.thumbnail} alt={categoria.nome} />
              <h1>{categoria.nome}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}