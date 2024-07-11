"""
- Recibir entrada por consola
- Crear archivos segun tipos
- Recibir nombre del directorio padre
- Poder crear sub directorios (prueba_x/reto_1)
- Poder crear archivos adicionales
"""
from sys import argv
from configs import ROOT_PATH
from os import listdir, mkdir


def create_files(file_name: str, directory: str) -> str:
    """
    :param file_name:
    :param directory:
    :return: File Path
    """

    working_path: str = f'{ROOT_PATH}/{directory}'

    # Si el archivo existe no se crea o sobre escribe
    try:
        mkdir(working_path)
    except FileExistsError:
        pass

    # Si el archivo existe se para la ejecucion
    if file_name in listdir(working_path):
        print(f'El archivo {file_name} ya existe')
        return None


    # Se crea el archivo que es solicitado
    try:
        with open(f"{working_path}/{file_name}", 'w') as file:
            print(f'El archivo {file_name} fue creado')
            file.close()
    except FileNotFoundError:
        print(f'Erro al crear el archivo {file_name}')

    return f'{working_path}/{file_name}'


def main() -> None:
    args: list[str] = list(map(lambda arg: arg.lower(), argv))

    if '-h' in args or '--help' in args:
        print('ARGUMENTOS \n'
              '1. [plantilla - Basic or None] \n'
              '2. [directorio - docs/files] \n'
              '3. [Archivos adicionales - main.js]\n')

    if 'basic' in args:
        directory: str = args[2]
        archivos_por_crear: list[str] = ['index.html', 'main.js', 'styles.css', 'README.md']

        if len(args) > 3:
            for index_file_name in range(3, len(args)):
                archivos_por_crear.append(args[index_file_name])

        for archivo in archivos_por_crear:
            create_files(archivo, directory)


if __name__ == '__main__':
    main()


