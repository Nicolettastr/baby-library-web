import React from "react";

const Footer = () => {
    return (
        <>
        <div className="info-footer-section">
            <div className="menu-footer">
                <div className="content-footer-detail">
                    <p>Contacto</p>
                    <p>Sobre nosotros</p>
                </div>
                <div>
                    <p>Cuentos</p>
                    <p>AudioCuentos</p>
                    <p>Juegos</p>
                </div>
            </div>
        </div>
        <div className="legal">
            <p>Aviso legal y condiciones</p>
            <p>política de cookies</p>
            <p>política de privacidad</p>
        </div>
        <div className="info-footer-section">
            <p className="rights">
                Juegos educativos por Rainbow tree inc, Audiocuentos por ToyCantando, Cuentos por Mundo Primario. Todos
                los
                derechos son de dichos autores y su uso en esta página web es solo para fines educativos.
            </p>
        </div>
        </>
    )
}

export default Footer;