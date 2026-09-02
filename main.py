import os
import io
from datetime import datetime





def create_readme():
    """
    Creates the Readme.md from the Readme template.
    """
    last_updated_at = get_last_updated()
     
    BASE_DIR = os.path.dirname(os.path.abspath(__file__))

    template_path = os.path.join(BASE_DIR, "readme.template.md")
    readme_path = os.path.join(BASE_DIR, "README.md")

    readme = io.open(readme_path, 'w+', encoding='UTF-8')

    for line in io.open(template_path, 'r', encoding='UTF-8'):
        line = line.replace('{{last_updated}}', last_updated_at)
        readme.write(line)

    readme.close()




def get_last_updated():
    
    now = datetime.now()
    return datetime.strftime(now, '%d %b, %Y')


def main():

    #info = onde_estou()
    #print("Caminho absoluto:", info["absoluto"])
    #print("Caminho relativo:", info["relativo"])
    #print("Pasta:", info["pasta"])
    #print("Pasta relativa:", info["pastarelativa"])

    create_readme()


#os.remove("README.md")
main()