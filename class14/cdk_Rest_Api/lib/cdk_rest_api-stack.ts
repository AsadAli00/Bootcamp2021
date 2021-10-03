import * as cdk from '@aws-cdk/core';
import * as lambda from '@aws-cdk/aws-lambda';
import {
  IResource,
  LambdaIntegration,
  MockIntegration,
  PassthroughBehavior,
  RestApi,
} from "@aws-cdk/aws-apigateway";
import { AttributeType, Table } from "@aws-cdk/aws-dynamodb";

export class CdkRestApiStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
    // The code that defines your stack goes here
    const dynamoTable = new Table(this, "books", {
      partitionKey: {
        name: "bookId",
        type: AttributeType.STRING,
      },
      tableName: "books"
    })




    // Create a Lambda function for each of the CRUD operations

    const getAllLambda = new lambda.Function(this, "getAllBooks", {
      runtime: lambda.Runtime.NODEJS_12_X,
      handler: "getAllBooks.handler",
      code: lambda.Code.fromAsset("lambdas"),
      memorySize: 1024,
      environment: {
        PRIMARY_KEY: "boodId",
        TABLE_NAME: dynamoTable.tableName,

      }
    });

    const getOneLambda = new lambda.Function(this, "getOneBook", {
      runtime: lambda.Runtime.NODEJS_12_X,
      handler: "getOneBook.handler",
      code: lambda.Code.fromAsset("lambdas"),
      environment: {
        PRIMARY_KEY: "bookId",
        TABLE_NAME: dynamoTable.tableName,
      }
    })

    const createOneLambda = new lambda.Function(this, "addBook", {
      runtime: lambda.Runtime.NODEJS_12_X,
      handler: "addBook.handler",
      code: lambda.Code.fromAsset("lambdas"),
      environment: {
        PRIMATY_KEY: "booKId",
        TABLE_NAME: dynamoTable.tableName,
      }
    })

    const updateOneLambda = new lambda.Function(this, "updateBook", {
      runtime: lambda.Runtime.NODEJS_12_X,
      handler: "updateBook.handler",
      code: lambda.Code.fromAsset("lambdas"),
      environment: {
        PRIMARY_KEY: "bookId",
        TABLE_NAME: dynamoTable.tableName,
      }
    });


    const deleteOneLambda = new lambda.Function(this, "deleteBook", {
      runtime: lambda.Runtime.NODEJS_12_X,
      handler: "deleteBook.handler",
      code: lambda.Code.fromAsset("lambda"),
      environment: {
        PRIMARY_KEY: "bookId",
        TABLE_NAME: dynamoTable.tableName,
      }
    });

    // Grant the Lambda function read access to the DynamoDB table

    dynamoTable.grantReadWriteData(getAllLambda);
    dynamoTable.grantReadWriteData(getOneLambda);
    dynamoTable.grantReadWriteData(createOneLambda);
    dynamoTable.grantReadWriteData(updateOneLambda);
    dynamoTable.grantReadWriteData(deleteOneLambda);

    // Integrate the Lambda functions with the API Gateway resource
    const getAllIntegration = new LambdaIntegration(getAllLambda);
    const createOneIntegration = new LambdaIntegration(createOneLambda);
    const getOneIntegration = new LambdaIntegration(getOneLambda);
    const updateOneIntegration = new LambdaIntegration(updateOneLambda);
    const deleteOneIntegration = new LambdaIntegration(deleteOneLambda);


    // Create an API Gateway resource for each of the CRUD operations

    const api = new RestApi(this, "booksApi", {
      restApiName: "Simple Books",
    })

    const items = api.root.addResource("books");
    items.addMethod("GET", getAllIntegration);
    items.addMethod("POST", createOneIntegration);
    addCorsOptions(items);


    const singleItems = items.addResource("{id}");
    singleItems.addMethod("GET", getOneIntegration);
    singleItems.addMethod("PATCH", updateOneIntegration);
    singleItems.addMethod("DELETE", deleteOneIntegration);
    addCorsOptions(singleItems);
  }
}


export function addCorsOptions(apiResource: IResource) {
  apiResource.addMethod(
    "OPTIONS",
    new MockIntegration({
      integrationResponses: [
        {
          statusCode: "200",
          responseParameters: {
            "method.response.header.Access-Control-Allow-Headers":
              "'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token,X-Amz-User-Agent'",
            "method.response.header.Access-Control-Allow-Origin": "'*'",
            "method.response.header.Access-Control-Allow-Credentials":
              "'false'",
            "method.response.header.Access-Control-Allow-Methods":
              "'OPTIONS,GET,PUT,POST,DELETE'",
          },
        },
      ],
      passthroughBehavior: PassthroughBehavior.NEVER,
      requestTemplates: {
        "application/jsom": '{"statusCode" : 200}',
      },
    }),
    {
      methodResponses: [
        {
          statusCode: "200",
          responseParameters: {
            "method.response.header.Access-Control-Allow-Headers": true,
            "method.response.header.Access-Control-Allow-Methods": true,
            "method.response.header.Access-Control-Allow-Credentials": true,
            "method.response.header.Access-Control-Allow-Origin": true,
          },
        },
      ],
    }
  );
}

