import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import './Assets.scss'
import { CryptocurrencyListType } from '../../../Dal/Types';
import { ModalForAssets } from '../ModalForAssets/ModalForAssets';
import { addAsset } from '../../../Bll/Portfolio-reducer';


type AssetsType = {
    item: CryptocurrencyListType
}
export const Assets = React.memo(({item}: AssetsType) => {
    const [showModal, setShowModal] = useState<boolean>(false)
    const dispatch = useDispatch()
    const history = useHistory();

    const openMoreInfo = (id: string) => {
        return history.push(`/currency-info/${id}`)
    }
    const addAssetsHandler = (assetsCount: number) => {
        const newAsset = {
            assetId: item.id,
            count: assetsCount,
            price: Number(item.priceUsd) * assetsCount
        }
        dispatch(addAsset(newAsset))
        setShowModal(!showModal)
    }
    const openModalPortfolioHandler = () => {
        setShowModal(true)
    }

    return <>
        {showModal && <ModalForAssets assets={item} addAssetsHandler={addAssetsHandler} showModal={setShowModal}/>}
        <div className="table-assets__item">
            <p className="table-assets__item_text">{item.rank}</p>
            <p className="table-assets__item_text">{item.name}</p>
            <p className="table-assets__item_text">${(+item.priceUsd).toFixed(2)}</p>
            <Button onClick={() => openMoreInfo(item.id)} variant="outline-primary">More
                info</Button>
            <Button onClick={openModalPortfolioHandler} variant="outline-primary">Buy
                currency</Button>
        </div>
    </>

})

