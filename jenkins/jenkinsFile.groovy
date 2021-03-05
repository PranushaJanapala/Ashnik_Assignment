node('master')
{
    print("connecting to ansible host")
   // getting cloned code to new folder.
    file_present = fileExists '/var/lib/jenkins/workspace/jenkins-ansible-apache/Ashnik_Assignment'
    if(file_present)
    {
           deleteDir()
    }
    sh "git clone https://github.com/PranushaJanapala/Ashnik_Assignment.git"
    //call ansible script 
    node('ansible')
    {
        dir("/apps/devops/script")
        {
            sh "ansible-playbook nginx_deploy.yml"
        }
    }
    
}

