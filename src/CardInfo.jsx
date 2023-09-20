export function Panel({ nameUser, porfilePicture, gender, birthday }) {
  return (
    <article className="user-panel-info">
      <div className="tittle-panel">
        <h1 className="tittle-panel-h1">Información del usuario</h1>
      </div>

      <section className="section-panel">
        <div className="info-user">
          <p className="data-user">Nombre: {nameUser}</p>

          <div className="picture-info">
            <p className="data-user text">Foto de perfil:</p>

            <img
              className="user-avatar"
              src={`https://unavatar.io/github/${porfilePicture}`}
              alt={`${nameUser}`}
            />
          </div>

          <p className="data-user">Género: {gender}</p>

          <p className="data-user">Fecha de nacimiento: {birthday}</p>
        </div>
      </section>
    </article>
  );
}
