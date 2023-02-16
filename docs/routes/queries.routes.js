/*
 ******************************************* Send a query *******************************************
 */
/**
 * @openapi
 * '/api/queries':
 *  post:
 *     tags:
 *     - Queries
 *     summary: Send a query
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *            type: object
 *            required:
 *              - name
 *              - email
 *              - message
 *            properties:
 *              name:
 *                type: string
 *                default: name
 *              email:
 *                type: string
 *                default: email
 *              message:
 *                type: string
 *                default: message
 *     responses:
 *      200:
 *        description: Created
 *      409:
 *        description: Conflict
 *      404:
 *        description: Not Found
 */
/*
 ******************************************* Get all queries *******************************************
 */
/**
 * @openapi
 * '/api/queries':
 *  get:
 *     security:
 *       - jwt: []
 *       - bearerAuth: []
 *     tags:
 *     - Queries
 *     summary: Get all queries
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                type: object
 *                properties:
 *                  id:
 *                    type: number
 *                  name:
 *                    type: string
 *       400:
 *         description: Bad request
 */
